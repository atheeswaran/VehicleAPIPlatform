import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineFinancingComponent } from './online-financing.component';

describe('OnlineFinancingComponent', () => {
  let component: OnlineFinancingComponent;
  let fixture: ComponentFixture<OnlineFinancingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnlineFinancingComponent]
    });
    fixture = TestBed.createComponent(OnlineFinancingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
