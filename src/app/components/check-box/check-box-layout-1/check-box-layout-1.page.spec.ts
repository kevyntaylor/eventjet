import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckBoxLayout1Page } from './check-box-layout-1.page';

describe('CheckBoxLayout1Page', () => {
  let component: CheckBoxLayout1Page;
  let fixture: ComponentFixture<CheckBoxLayout1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CheckBoxLayout1Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckBoxLayout1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
