import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectLayout6Page } from './select-layout-6.page';

describe('SelectLayout6Page', () => {
  let component: SelectLayout6Page;
  let fixture: ComponentFixture<SelectLayout6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectLayout6Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectLayout6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
