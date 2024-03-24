import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollabDesignComponent } from './collab-design.component';

describe('CollabDesignComponent', () => {
  let component: CollabDesignComponent;
  let fixture: ComponentFixture<CollabDesignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollabDesignComponent]
    });
    fixture = TestBed.createComponent(CollabDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
