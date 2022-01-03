import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleButtonLayout3Page } from './toggle-button-layout-3.page';

describe('ToggleButtonLayout3Page', () => {
  let component: ToggleButtonLayout3Page;
  let fixture: ComponentFixture<ToggleButtonLayout3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ToggleButtonLayout3Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleButtonLayout3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
