import { TestBed } from '@angular/core/testing';

import { SafetyAlertsService } from './safety-alerts.service';

describe('SafetyAlertsService', () => {
  let service: SafetyAlertsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SafetyAlertsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
