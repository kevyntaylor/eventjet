import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleButtonLayout2Page } from './toggle-button-layout-2.page';

describe('ToggleButtonLayout2Page', () => {
  let component: ToggleButtonLayout2Page;
  let fixture: ComponentFixture<ToggleButtonLayout2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ToggleButtonLayout2Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleButtonLayout2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
