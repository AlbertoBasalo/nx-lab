export type EnvironmentConfig = {
  production: boolean;
  instrumentation: {
    onlyErrors: boolean;
    alertUser: boolean;
  };
};
