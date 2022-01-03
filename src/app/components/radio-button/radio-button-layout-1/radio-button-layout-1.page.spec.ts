import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioButtonLayout1Page } from './radio-button-layout-1.page';

describe('RadioButtonLayout1Page', () => {
  let component: RadioButtonLayout1Page;
  let fixture: ComponentFixture<RadioButtonLayout1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RadioButtonLayout1Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioButtonLayout1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
