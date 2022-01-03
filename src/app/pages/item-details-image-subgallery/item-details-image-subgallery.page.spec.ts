import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDetailsImageSubGalleryPage } from './item-details-image-subgallery.page';

describe('ItemDetailsImageSubGalleryPage', () => {
  let component: ItemDetailsImageSubGalleryPage;
  let fixture: ComponentFixture<ItemDetailsImageSubGalleryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemDetailsImageSubGalleryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDetailsImageSubGalleryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
