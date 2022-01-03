import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeLineLayout2Page } from './timeline-layout-2.page';

describe('TimeLineLayout2Page', () => {
  let component: TimeLineLayout2Page;
  let fixture: ComponentFixture<TimeLineLayout2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TimeLineLayout2Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeLineLayout2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
