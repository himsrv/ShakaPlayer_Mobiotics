import { TestBed } from '@angular/core/testing';

import { UriExchangeService } from './uri-exchange.service';

describe('UriExchangeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UriExchangeService = TestBed.get(UriExchangeService);
    expect(service).toBeTruthy();
  });
});
