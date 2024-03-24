import { TestBed } from '@angular/core/testing';

import { FleetOptimizationService } from './fleet-optimization.service';

describe('FleetOptimizationService', () => {
  let service: FleetOptimizationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FleetOptimizationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
