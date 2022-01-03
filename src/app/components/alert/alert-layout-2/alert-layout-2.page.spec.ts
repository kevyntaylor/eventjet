import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertLayout2Page } from './alert-layout-2.page';

describe('AlertLayout2Page', () => {
  let component: AlertLayout2Page;
  let fixture: ComponentFixture<AlertLayout2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AlertLayout2Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertLayout2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
