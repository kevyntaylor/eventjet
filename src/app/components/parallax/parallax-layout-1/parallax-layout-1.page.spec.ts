import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallaxLayout1Page } from './parallax-layout-1.page';

describe('ParallaxLayout1Page', () => {
  let component: ParallaxLayout1Page;
  let fixture: ComponentFixture<ParallaxLayout1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ParallaxLayout1Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParallaxLayout1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
