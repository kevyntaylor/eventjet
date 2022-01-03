import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashScreenLayout3Page } from './splash-screen-layout-3.page';

describe('SplashScreenLayout3Page', () => {
  let component: SplashScreenLayout3Page;
  let fixture: ComponentFixture<SplashScreenLayout3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SplashScreenLayout3Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplashScreenLayout3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
