import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDetailsTabPage } from './item-details-tab.page';

describe('ItemDetailsTabPage', () => {
  let component: ItemDetailsTabPage;
  let fixture: ComponentFixture<ItemDetailsTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ItemDetailsTabPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDetailsTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
