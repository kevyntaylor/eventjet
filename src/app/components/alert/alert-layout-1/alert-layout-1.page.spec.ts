import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertLayout1Page } from './alert-layout-1.page';

describe('AlertLayout1Page', () => {
  let component: AlertLayout1Page;
  let fixture: ComponentFixture<AlertLayout1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AlertLayout1Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertLayout1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
