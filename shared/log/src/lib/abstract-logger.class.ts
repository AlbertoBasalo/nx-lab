import { InjectionToken } from '@angular/core';
import { AppEvent } from './app-event.dto';
import { AppMetric } from './app-metric.dto';

export const LOGGER = new InjectionToken<AbstractLogger>('LOGGER');

export abstract class AbstractLogger {
  abstract saveEvent(event: AppEvent): void;
  abstract saveMetric(metric: AppMetric): void;
}
