import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageGalleryLayout2Page } from './image-gallery-layout-2.page';

describe('ImageGalleryLayout2Page', () => {
  let component: ImageGalleryLayout2Page;
  let fixture: ComponentFixture<ImageGalleryLayout2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ImageGalleryLayout2Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageGalleryLayout2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
