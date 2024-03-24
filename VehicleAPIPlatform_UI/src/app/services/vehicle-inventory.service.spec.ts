import { TestBed } from '@angular/core/testing';

import { VehicleInventoryService } from './vehicle-inventory.service';

describe('VehicleInventoryService', () => {
  let service: VehicleInventoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehicleInventoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
