import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollSegmentListLayout2Page } from './scroll-segment-layout-2.page';

describe('ScrollSegmentListLayout2Page', () => {
  let component: ScrollSegmentListLayout2Page;
  let fixture: ComponentFixture<ScrollSegmentListLayout2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScrollSegmentListLayout2Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollSegmentListLayout2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
