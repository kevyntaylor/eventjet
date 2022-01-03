import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterLayout1Page } from './register-layout-1.page';

describe('RegisterLayout1Page', () => {
  let component: RegisterLayout1Page;
  let fixture: ComponentFixture<RegisterLayout1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterLayout1Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterLayout1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
