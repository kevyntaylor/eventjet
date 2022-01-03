import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsLayout1Page } from './forms-layout-1.page';

describe('FormsLayout1Page', () => {
  let component: FormsLayout1Page;
  let fixture: ComponentFixture<FormsLayout1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormsLayout1Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsLayout1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
