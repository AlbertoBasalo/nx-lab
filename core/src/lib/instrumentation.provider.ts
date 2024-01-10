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

type WithMinLogLevel = (onlyErrors: boolean) => MinLogLevelProvider;

export const withMinLogLevel: WithMinLogLevel = (onlyErrors: boolean) => {
  return {
    provide: MIN_LOG_LEVEL,
    useValue: onlyErrors ? LogLevel.error : LogLevel.debug,
  };
};
