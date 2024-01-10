import { EnvironmentConfig } from './environment-config.dto';

export const environment: EnvironmentConfig = {
  production: false,
  instrumentation: {
    onlyErrors: false,
    alertUser: false,
  },
};
