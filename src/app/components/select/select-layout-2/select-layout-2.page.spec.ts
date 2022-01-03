import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectLayout2Page } from './select-layout-2.page';

describe('SelectLayout2Page', () => {
  let component: SelectLayout2Page;
  let fixture: ComponentFixture<SelectLayout2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectLayout2Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectLayout2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
