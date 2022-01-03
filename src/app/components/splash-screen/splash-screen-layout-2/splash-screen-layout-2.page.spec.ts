import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashScreenLayout2Page } from './splash-screen-layout-2.page';

describe('SplashScreenLayout2Page', () => {
  let component: SplashScreenLayout2Page;
  let fixture: ComponentFixture<SplashScreenLayout2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SplashScreenLayout2Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplashScreenLayout2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
