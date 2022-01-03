import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectLayout3Page } from './select-layout-3.page';

describe('SelectLayout3Page', () => {
  let component: SelectLayout3Page;
  let fixture: ComponentFixture<SelectLayout3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectLayout3Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectLayout3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
