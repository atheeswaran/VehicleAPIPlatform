import { TestBed } from '@angular/core/testing';

import { CollabDesignService } from './collab-design.service';

describe('CollabDesignService', () => {
  let service: CollabDesignService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollabDesignService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
