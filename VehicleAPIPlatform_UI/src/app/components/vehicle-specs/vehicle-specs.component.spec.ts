import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleSpecsComponent } from './vehicle-specs.component';

describe('VehicleSpecsComponent', () => {
  let component: VehicleSpecsComponent;
  let fixture: ComponentFixture<VehicleSpecsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VehicleSpecsComponent]
    });
    fixture = TestBed.createComponent(VehicleSpecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
