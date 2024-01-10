import { InjectionToken } from '@angular/core';

export enum LogLevel {
  debug = 0,
  info = 1,
  warn = 2,
  error = 3,
}

export const MIN_LOG_LEVEL = new InjectionToken<LogLevel>('MIN_LOG_LEVEL');

export type AppEvent = {
  level: LogLevel;
  message: string;
  timestamp?: number;
  userId?: string;
};
