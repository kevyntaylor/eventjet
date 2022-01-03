import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationLayout6Page } from './animation-layout-6.page';

describe('AnimationLayout6Page', () => {
  let component: AnimationLayout6Page;
  let fixture: ComponentFixture<AnimationLayout6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AnimationLayout6Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationLayout6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
