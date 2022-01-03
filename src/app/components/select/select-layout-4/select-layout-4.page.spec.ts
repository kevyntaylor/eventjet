import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectLayout4Page } from './select-layout-4.page';

describe('SelectLayout4Page', () => {
  let component: SelectLayout4Page;
  let fixture: ComponentFixture<SelectLayout4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectLayout4Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectLayout4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
