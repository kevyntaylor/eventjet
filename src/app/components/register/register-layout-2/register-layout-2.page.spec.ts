import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterLayout2Page } from './register-layout-2.page';

describe('RegisterLayout2Page', () => {
  let component: RegisterLayout2Page;
  let fixture: ComponentFixture<RegisterLayout2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterLayout2Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterLayout2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
