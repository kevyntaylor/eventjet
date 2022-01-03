import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckBoxLayout2Page } from './check-box-layout-2.page';

describe('CheckBoxLayout2Page', () => {
  let component: CheckBoxLayout2Page;
  let fixture: ComponentFixture<CheckBoxLayout2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CheckBoxLayout2Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckBoxLayout2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
