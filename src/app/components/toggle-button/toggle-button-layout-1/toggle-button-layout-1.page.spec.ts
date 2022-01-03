import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleButtonLayout1Page } from './toggle-button-layout-1.page';

describe('ToggleButtonLayout1Page', () => {
  let component: ToggleButtonLayout1Page;
  let fixture: ComponentFixture<ToggleButtonLayout1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ToggleButtonLayout1Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleButtonLayout1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
