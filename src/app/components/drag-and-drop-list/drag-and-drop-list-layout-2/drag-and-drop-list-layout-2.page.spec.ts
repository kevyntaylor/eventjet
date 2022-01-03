import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragAndDropListLayout2Page } from './drag-and-drop-list-layout-2.page';

describe('DragAndDropListLayout2Page', () => {
  let component: DragAndDropListLayout2Page;
  let fixture: ComponentFixture<DragAndDropListLayout2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DragAndDropListLayout2Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragAndDropListLayout2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
