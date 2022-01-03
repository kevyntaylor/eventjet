import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashScreenLayout1Page } from './splash-screen-layout-1.page';

describe('SplashScreenLayout1Page', () => {
  let component: SplashScreenLayout1Page;
  let fixture: ComponentFixture<SplashScreenLayout1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SplashScreenLayout1Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplashScreenLayout1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
