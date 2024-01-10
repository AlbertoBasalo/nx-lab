import { Injectable, inject } from '@angular/core';
import { AbstractCollector } from './abstract-collector.class';
import { AbstractLogger, LOGGER } from './abstract-logger.class';
import { AppEvent, LogLevel, MIN_LOG_LEVEL } from './app-event.dto';
import { AppMetric } from './app-metric.dto';

@Injectable()
export class BasicCollectorService extends AbstractCollector {
  #minLevel: LogLevel = inject(MIN_LOG_LEVEL);
  #logger: AbstractLogger = inject(LOGGER);

  addEvent(event: AppEvent) {
    if (this.#minLevel && this.#minLevel > event.level) return;
    event.timestamp = Date.now();
    this.#logger.saveEvent(event);
  }
  addMetric(metric: AppMetric) {
    metric.timestamp = Date.now();
    this.#logger.saveMetric(metric);
  }
}
