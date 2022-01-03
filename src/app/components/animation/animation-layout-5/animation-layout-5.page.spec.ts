import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationLayout5Page } from './animation-layout-5.page';

describe('AnimationLayout5Page', () => {
  let component: AnimationLayou51Page;
  let fixture: ComponentFixture<AnimationLayout5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AnimationLayout5Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationLayout5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
