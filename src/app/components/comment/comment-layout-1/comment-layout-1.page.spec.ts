import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentLayout1Page } from './comment-layout-1.page';

describe('CommentLayout1Page', () => {
  let component: CommentLayout1Page;
  let fixture: ComponentFixture<CommentLayout1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CommentLayout1Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentLayout1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
