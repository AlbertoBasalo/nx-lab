import { ApplicationConfig } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import { provideInstrumentation, withMinLogLevel } from '@lab/core';

import { environment } from '../environments/environment';
import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(),
    provideRouter(appRoutes),
    provideInstrumentation(
      withMinLogLevel(environment.instrumentation.onlyErrors)
    ),
  ],
};
