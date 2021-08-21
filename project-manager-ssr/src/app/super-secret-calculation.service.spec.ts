import { TestBed } from '@angular/core/testing';

import { SuperSecretCalculationService } from './super-secret-calculation.service';

describe('SuperSecretCalculationService', () => {
  let service: SuperSecretCalculationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuperSecretCalculationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
