import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPasswordLayout1Page } from './new-password-layout-1.page';

describe('NewPasswordLayout1Page', () => {
  let component: NewPasswordLayout1Page;
  let fixture: ComponentFixture<NewPasswordLayout1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewPasswordLayout1Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPasswordLayout1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
