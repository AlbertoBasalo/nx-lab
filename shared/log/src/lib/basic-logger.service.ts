import { Injectable } from '@angular/core';
import { AbstractLogger } from './abstract-logger.class';
import { AppEvent } from './app-event.dto';
import { AppMetric } from './app-metric.dto';

@Injectable()
export class BasicLoggerService extends AbstractLogger {
  saveEvent(event: AppEvent) {
    console.log(event);
  }
  saveMetric(metric: AppMetric) {
    console.log(metric);
  }
}
