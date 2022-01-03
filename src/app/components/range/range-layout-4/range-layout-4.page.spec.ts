import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeLayout4Page } from './range-layout-4.page';

describe('RangeLayout4Page', () => {
  let component: RangeLayout4Page;
  let fixture: ComponentFixture<RangeLayout4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RangeLayout4Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeLayout4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
