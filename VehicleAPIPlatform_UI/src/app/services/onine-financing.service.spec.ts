import { TestBed } from '@angular/core/testing';

import { OnineFinancingService } from './onine-financing.service';

describe('OnineFinancingService', () => {
  let service: OnineFinancingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnineFinancingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
