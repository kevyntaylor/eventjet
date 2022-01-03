import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageGalleryLayout3Page } from './image-gallery-layout-3.page';

describe('ImageGalleryLayout3Page', () => {
  let component: ImageGalleryLayout3Page;
  let fixture: ComponentFixture<ImageGalleryLayout3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ImageGalleryLayout3Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageGalleryLayout3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
