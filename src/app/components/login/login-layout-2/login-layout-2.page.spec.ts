import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginLayout2Page } from './login-layout-2.page';

describe('LoginLayout2Page', () => {
  let component: LoginLayout2Page;
  let fixture: ComponentFixture<LoginLayout2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginLayout2Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginLayout2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
