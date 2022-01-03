import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioButtonLayout2Page } from './radio-button-layout-2.page';

describe('RadioButtonLayout2Page', () => {
  let component: RadioButtonLayout2Page;
  let fixture: ComponentFixture<RadioButtonLayout2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RadioButtonLayout2Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioButtonLayout2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
