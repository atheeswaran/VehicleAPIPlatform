import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FleetOptimizationComponent } from './fleet-optimization.component';

describe('FleetOptimizationComponent', () => {
  let component: FleetOptimizationComponent;
  let fixture: ComponentFixture<FleetOptimizationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FleetOptimizationComponent]
    });
    fixture = TestBed.createComponent(FleetOptimizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
