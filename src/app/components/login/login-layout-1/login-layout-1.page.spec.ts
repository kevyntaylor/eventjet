import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginLayout1Page } from './login-layout-1.page';

describe('LoginLayout1Page', () => {
  let component: LoginLayout1Page;
  let fixture: ComponentFixture<LoginLayout1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginLayout1Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginLayout1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
