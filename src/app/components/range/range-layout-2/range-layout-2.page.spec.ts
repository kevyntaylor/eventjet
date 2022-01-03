import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeLayout2Page } from './range-layout-2.page';

describe('RangeLayout2Page', () => {
  let component: RangeLayout2Page;
  let fixture: ComponentFixture<RangeLayout2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RangeLayout2Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeLayout2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
