import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandableListLayout2Page } from './expandable-list-layout-2.page';

describe('ExpandableListLayout2Page', () => {
  let component: ExpandableListLayout2Page;
  let fixture: ComponentFixture<ExpandableListLayout2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExpandableListLayout2Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandableListLayout2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
