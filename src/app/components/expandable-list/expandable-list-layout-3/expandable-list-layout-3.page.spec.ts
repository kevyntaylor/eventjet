import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandableListLayout3Page } from './expandable-list-layout-3.page';

describe('ExpandableListLayout3Page', () => {
  let component: ExpandableListLayout3Page;
  let fixture: ComponentFixture<ExpandableListLayout3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExpandableListLayout3Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandableListLayout3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
