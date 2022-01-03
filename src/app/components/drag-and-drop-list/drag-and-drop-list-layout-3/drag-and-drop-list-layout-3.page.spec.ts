import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragAndDropListLayout3Page } from './drag-and-drop-list-layout-3.page';

describe('DragAndDropListLayout3Page', () => {
  let component: DragAndDropListLayout3Page;
  let fixture: ComponentFixture<DragAndDropListLayout3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DragAndDropListLayout3Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragAndDropListLayout3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
