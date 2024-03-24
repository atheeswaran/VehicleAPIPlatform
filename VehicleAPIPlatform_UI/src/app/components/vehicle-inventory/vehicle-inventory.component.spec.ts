import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleInventoryComponent } from './vehicle-inventory.component';

describe('VehicleInventoryComponent', () => {
  let component: VehicleInventoryComponent;
  let fixture: ComponentFixture<VehicleInventoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VehicleInventoryComponent]
    });
    fixture = TestBed.createComponent(VehicleInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
