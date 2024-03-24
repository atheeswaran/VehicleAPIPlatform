import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionServiceComponent } from './subscription-service.component';

describe('SubscriptionServiceComponent', () => {
  let component: SubscriptionServiceComponent;
  let fixture: ComponentFixture<SubscriptionServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubscriptionServiceComponent]
    });
    fixture = TestBed.createComponent(SubscriptionServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
