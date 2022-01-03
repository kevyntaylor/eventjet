import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionSheetLayout1Page } from './action-sheet-layout-1.page';

describe('ActionSheetLayout1Page', () => {
  let component: ActionSheetLayout1Page;
  let fixture: ComponentFixture<ActionSheetLayout1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActionSheetLayout1Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionSheetLayout1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
