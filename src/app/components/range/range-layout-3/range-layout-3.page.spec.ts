import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeLayout3Page } from './range-layout-3.page';

describe('RangeLayout3Page', () => {
  let component: RangeLayout3Page;
  let fixture: ComponentFixture<RangeLayout3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RangeLayout3Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeLayout3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
