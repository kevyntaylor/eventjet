import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeLayout1Page } from './range-layout-1.page';

describe('RangeLayout1Page', () => {
  let component: RangeLayout1Page;
  let fixture: ComponentFixture<RangeLayout1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RangeLayout1Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeLayout1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
