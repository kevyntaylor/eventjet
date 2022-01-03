import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeLineLayout3Page } from './timeline-layout-3.page';

describe('TimeLineLayout3Page', () => {
  let component: TimeLineLayout3Page;
  let fixture: ComponentFixture<TimeLineLayout3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TimeLineLayout3Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeLineLayout3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
