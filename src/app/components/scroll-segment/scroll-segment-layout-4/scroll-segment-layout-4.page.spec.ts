import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollSegmentListLayout4Page } from './scroll-segment-layout-4.page';

describe('ScrollSegmentListLayout4Page', () => {
  let component: ScrollSegmentListLayout4Page;
  let fixture: ComponentFixture<ScrollSegmentListLayout4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScrollSegmentListLayout4Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollSegmentListLayout4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
