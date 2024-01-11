import {
  InjectionToken,
  Provider,
  makeEnvironmentProviders,
} from '@angular/core';
import {
  BasicCollectorService,
  BasicLoggerService,
  COLLECTOR,
  LOGGER,
  LogLevel,
  MIN_LOG_LEVEL,
} from '@lab/log';

/**
 * Factory funcion that returns providers for the instrumentation lib.
 * @param minLogLevel
 * @returns
 */
export const provideInstrumentation = (minLogLevel: MinLogLevelProvider) => {
  const providers: Provider[] = [
    {
      provide: COLLECTOR,
      useClass: BasicCollectorService,
    },
    {
      provide: LOGGER,
      useClass: BasicLoggerService,
    },
  ];
  if (minLogLevel) {
    providers.push(minLogLevel);
  }
  return makeEnvironmentProviders(providers);
};

type MinLogLevelProvider = {
  provide: InjectionToken<LogLevel>;
  useValue: LogLevel;
};

type WithOnlyErrors = (onlyErrors: boolean) => MinLogLevelProvider;

/**
 * Factory function that returns a provider for the min log level token.
 * @param onlyErrors Boolean indicating if only errors should be logged.
 * @returns
 */
export const withOnlyErrors: WithOnlyErrors = (onlyErrors: boolean) => {
  return {
    provide: MIN_LOG_LEVEL,
    useValue: onlyErrors ? LogLevel.error : LogLevel.debug,
  };
};
