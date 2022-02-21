import { TestBed } from '@angular/core/testing';

import { HttpRequestDataService } from './http-request-data.service';

describe('HttpRequestDataService', () => {
  let service: HttpRequestDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpRequestDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
