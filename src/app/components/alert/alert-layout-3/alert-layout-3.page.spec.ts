import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertLayout3Page } from './alert-layout-3.page';

describe('AlertLayout3Page', () => {
  let component: AlertLayout3Page;
  let fixture: ComponentFixture<AlertLayout3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertLayout3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertLayout3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
