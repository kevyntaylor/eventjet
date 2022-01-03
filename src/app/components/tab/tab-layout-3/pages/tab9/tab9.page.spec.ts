import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab9Page } from './tab9.page';

describe('Tab9Page', () => {
  let component: Tab9Page;
  let fixture: ComponentFixture<Tab9Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Tab9Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
