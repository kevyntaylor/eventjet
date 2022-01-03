import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDetailsSwipeToDismissPage } from './item-details-swipe-to-dismiss.page';

describe('ItemDetailsSwipeToDismissPage', () => {
  let component: ItemDetailsSwipeToDismissPage;
  let fixture: ComponentFixture<ItemDetailsSwipeToDismissPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemDetailsSwipeToDismissPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDetailsSwipeToDismissPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
