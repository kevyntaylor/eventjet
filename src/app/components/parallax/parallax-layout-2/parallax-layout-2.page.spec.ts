import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallaxLayout2Page } from './parallax-layout-2.page';

describe('ParallaxLayout2Page', () => {
  let component: ParallaxLayout2Page;
  let fixture: ComponentFixture<ParallaxLayout2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ParallaxLayout2Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParallaxLayout2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
