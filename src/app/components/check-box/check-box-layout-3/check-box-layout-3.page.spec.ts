import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckBoxLayout3Page } from './check-box-layout-3.page';

describe('CheckBoxLayout3Page', () => {
  let component: CheckBoxLayout3Page;
  let fixture: ComponentFixture<CheckBoxLayout3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CheckBoxLayout3Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckBoxLayout3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
