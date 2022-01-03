import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationLayout3Page } from './animation-layout-3.page';

describe('AnimationLayout3Page', () => {
  let component: AnimationLayout3Page;
  let fixture: ComponentFixture<AnimationLayout3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AnimationLayout3Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationLayout3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
