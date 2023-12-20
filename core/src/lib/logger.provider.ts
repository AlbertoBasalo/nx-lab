import { Provider, makeEnvironmentProviders } from '@angular/core';
import { LoggerService } from '@lab/log';

/**
 * Provides the application logger
 * @description This is a factory function with predefined values
 * @param loggerConfig The application configuration (optional with default values)
 */
export const provideLogger = (loggerConfig?: object, writer?: Provider) => {
  //const configuration = { ...loggerConfig };
  const providers: Provider[] = [
    LoggerService,
    // { provide: LOGGER_CONFIG, useValue: configuration },
  ];
  if (writer) {
    providers.push(writer);
  }
  return makeEnvironmentProviders(providers);
};
