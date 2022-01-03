import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollSegmentListLayout3Page } from './scroll-segment-layout-3.page';

describe('ScrollSegmentListLayout3Page', () => {
  let component: ScrollSegmentListLayout3Page;
  let fixture: ComponentFixture<ScrollSegmentListLayout3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScrollSegmentListLayout3Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollSegmentListLayout3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
