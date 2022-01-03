import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionSheetLayout3Page } from './action-sheet-layout-3.page';

describe('ActionSheetLayout3Page', () => {
  let component: ActionSheetLayout3Page;
  let fixture: ComponentFixture<ActionSheetLayout3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActionSheetLayout3Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionSheetLayout3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
