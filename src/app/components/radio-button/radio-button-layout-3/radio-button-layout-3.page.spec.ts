import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioButtonLayout3Page } from './radio-button-layout-3.page';

describe('RadioButtonLayout3Page', () => {
  let component: RadioButtonLayout3Page;
  let fixture: ComponentFixture<RadioButtonLayout3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RadioButtonLayout3Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioButtonLayout3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
