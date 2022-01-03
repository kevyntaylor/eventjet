import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandableListLayout1Page } from './expandable-list-layout-1.page';

describe('ExpandableListLayout1Page', () => {
  let component: ExpandableListLayout1Page;
  let fixture: ComponentFixture<ExpandableListLayout1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExpandableListLayout1Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandableListLayout1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
