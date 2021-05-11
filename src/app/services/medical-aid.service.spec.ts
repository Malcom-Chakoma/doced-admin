import { TestBed } from '@angular/core/testing';

import { MedicalAidService } from './medical-aid.service';

describe('MedicalAidService', () => {
  let service: MedicalAidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicalAidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
