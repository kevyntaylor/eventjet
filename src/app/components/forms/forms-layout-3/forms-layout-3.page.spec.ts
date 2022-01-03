import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsLayout3Page } from './forms-layout-3.page';

describe('FormsLayout3Page', () => {
  let component: FormsLayout3Page;
  let fixture: ComponentFixture<FormsLayout3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormsLayout3Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsLayout3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
