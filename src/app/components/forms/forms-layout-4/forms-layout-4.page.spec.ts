import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsLayout4Page } from './forms-layout-4.page';

describe('FormsLayout4Page', () => {
  let component: FormsLayout4Page;
  let fixture: ComponentFixture<FormsLayout4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormsLayout4Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsLayout4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
