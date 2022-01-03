import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragAndDropListLayout1Page } from './drag-and-drop-list-layout-1.page';

describe('DragAndDropListLayout1Page', () => {
  let component: DragAndDropListLayout1Page;
  let fixture: ComponentFixture<DragAndDropListLayout1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DragAndDropListLayout1Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragAndDropListLayout1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
