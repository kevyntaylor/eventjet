import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentListLayout1Page } from './segment-layout-1.page';

describe('SegmentListLayout1Page', () => {
  let component: SegmentListLayout1Page;
  let fixture: ComponentFixture<SegmentListLayout1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SegmentListLayout1Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentListLayout1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
