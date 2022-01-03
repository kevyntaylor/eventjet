import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeLineLayout1Page } from './timeline-layout-1.page';

describe('TimeLineLayout1Page', () => {
  let component: TimeLineLayout1Page;
  let fixture: ComponentFixture<TimeLineLayout1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TimeLineLayout1Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeLineLayout1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
