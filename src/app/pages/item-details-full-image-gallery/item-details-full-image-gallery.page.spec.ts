import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDetailsFullImageGalleryPage } from './item-details-full-image-gallery.page';

describe('ItemDetailsFullImageGalleryPage', () => {
  let component: ItemDetailsFullImageGalleryPage;
  let fixture: ComponentFixture<ItemDetailsFullImageGalleryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemDetailsFullImageGalleryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDetailsFullImageGalleryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
