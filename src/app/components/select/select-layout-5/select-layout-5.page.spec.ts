import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectLayout5Page } from './select-layout-5.page';

describe('SelectLayout5Page', () => {
  let component: SelectLayout5Page;
  let fixture: ComponentFixture<SelectLayout5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectLayout5Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectLayout5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
