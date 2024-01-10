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

export const provideInstrumentation = (withMinLogLevel: WithMinLogLevel) => {
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
  if (withMinLogLevel) {
    providers.push(withMinLogLevel());
  }
  return makeEnvironmentProviders(providers);
};

type WithMinLogLevel = () => {
  provide: InjectionToken<LogLevel>;
  useValue: LogLevel;
};

export const withMinLogLevel: WithMinLogLevel = () => {
  return {
    provide: MIN_LOG_LEVEL,
    useValue: LogLevel.debug,
  };
};
