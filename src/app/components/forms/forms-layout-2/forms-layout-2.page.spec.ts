import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsLayout2Page } from './forms-layout-2.page';

describe('FormsLayout2Page', () => {
  let component: FormsLayout2Page;
  let fixture: ComponentFixture<FormsLayout2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormsLayout2Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsLayout2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
