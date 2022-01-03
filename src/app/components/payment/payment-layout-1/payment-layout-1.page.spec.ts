import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentLayout1Page } from './payment-layout-1.page';

describe('PaymentLayout1Page', () => {
  let component: PaymentLayout1Page;
  let fixture: ComponentFixture<PaymentLayout1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentLayout1Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentLayout1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
