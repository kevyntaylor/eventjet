import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationLayout8Page } from './animation-layout-8.page';

describe('AnimationLayout8Page', () => {
  let component: AnimationLayout8Page;
  let fixture: ComponentFixture<AnimationLayout8Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AnimationLayout8Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationLayout8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
