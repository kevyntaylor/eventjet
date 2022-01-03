import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionSheetLayout2Page } from './action-sheet-layout-2.page';

describe('ActionSheetLayout2Page', () => {
  let component: ActionSheetLayout2Page;
  let fixture: ComponentFixture<ActionSheetLayout2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActionSheetLayout2Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionSheetLayout2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
