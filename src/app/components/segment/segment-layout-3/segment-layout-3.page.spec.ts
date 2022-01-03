import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentListLayout3Page } from './segment-layout-3.page';

describe('SegmentListLayout3Page', () => {
  let component: SegmentListLayout3Page;
  let fixture: ComponentFixture<SegmentListLayout3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SegmentListLayout3Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentListLayout3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
