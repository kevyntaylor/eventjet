import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationLayout9Page } from './animation-layout-9.page';

describe('AnimationLayout9Page', () => {
  let component: AnimationLayout9Page;
  let fixture: ComponentFixture<AnimationLayout9Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AnimationLayout9Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationLayout9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
