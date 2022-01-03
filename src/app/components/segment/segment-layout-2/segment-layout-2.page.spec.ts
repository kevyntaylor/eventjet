import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentListLayout2Page } from './segment-layout-2.page';

describe('SegmentListLayout2Page', () => {
  let component: SegmentListLayout2Page;
  let fixture: ComponentFixture<SegmentListLayout2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SegmentListLayout2Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentListLayout2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
