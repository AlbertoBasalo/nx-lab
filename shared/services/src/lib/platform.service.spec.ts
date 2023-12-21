import { inject } from '@angular/core/testing';
import { PlatformService } from './platform.service';

describe('PlatformService', () => {
  let service: PlatformService;

  beforeEach(() => {
    inject([PlatformService], (platformService: PlatformService) => {
      service = platformService;
    })();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return true for isBrowser', () => {
    expect(service.isBrowser).toBe(true);
  });
});
