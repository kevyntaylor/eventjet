import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallaxLayout4Page } from './parallax-layout-4.page';

describe('ParallaxLayout4Page', () => {
  let component: ParallaxLayout4Page;
  let fixture: ComponentFixture<ParallaxLayout4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ParallaxLayout4Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParallaxLayout4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
