import { TestBed } from '@angular/core/testing';

import { ShipmentSearchService } from './shipment-search.service';

describe('ShipmentSearchService', () => {
  let service: ShipmentSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShipmentSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
