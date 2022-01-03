import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullImageGalleryLayout1Page } from './full-image-gallery-layout-1.page';

describe('FullImageGalleryLayout1Page', () => {
  let component: FullImageGalleryLayout1Page;
  let fixture: ComponentFixture<FullImageGalleryLayout1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FullImageGalleryLayout1Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullImageGalleryLayout1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
