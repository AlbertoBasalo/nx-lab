import { InjectionToken } from '@angular/core';
import { AppEvent } from './app-event.dto';
import { AppMetric } from './app-metric.dto';

export const COLLECTOR = new InjectionToken<AbstractCollector>('COLLECTOR');

export abstract class AbstractCollector {
  abstract addEvent(event: AppEvent): void;
  abstract addMetric(metric: AppMetric): void;
}
