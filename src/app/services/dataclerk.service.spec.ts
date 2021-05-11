import { TestBed } from '@angular/core/testing';

import { DataclerkService } from './dataclerk.service';

describe('DataclerkService', () => {
  let service: DataclerkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataclerkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
