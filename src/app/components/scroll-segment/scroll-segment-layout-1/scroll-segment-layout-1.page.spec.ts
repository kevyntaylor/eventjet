import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollSegmentListLayout1Page } from './scroll-segment-layout-1.page';

describe('SegmentListLayout1Page', () => {
  let component: ScrollSegmentListLayout1Page;
  let fixture: ComponentFixture<ScrollSegmentListLayout1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScrollSegmentListLayout1Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollSegmentListLayout1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
