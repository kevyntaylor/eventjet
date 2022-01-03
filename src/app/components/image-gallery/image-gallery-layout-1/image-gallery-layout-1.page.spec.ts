import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageGalleryLayout1Page } from './image-gallery-layout-1.page';

describe('ImageGalleryLayout1Page', () => {
  let component: ImageGalleryLayout1Page;
  let fixture: ComponentFixture<ImageGalleryLayout1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ImageGalleryLayout1Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageGalleryLayout1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
