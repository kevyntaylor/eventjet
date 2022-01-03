import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDetailsActionSheetPage } from './item-details-action-sheet.page';

describe('ItemDetailsActionSheetPage', () => {
  let component: ItemDetailsActionSheetPage;
  let fixture: ComponentFixture<ItemDetailsActionSheetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ItemDetailsActionSheetPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDetailsActionSheetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
