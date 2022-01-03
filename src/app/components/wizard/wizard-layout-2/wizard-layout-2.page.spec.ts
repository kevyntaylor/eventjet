import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardLayout2Page } from './wizard-layout-2.page';

describe('WizardLayout2Page', () => {
  let component: WizardLayout2Page;
  let fixture: ComponentFixture<WizardLayout2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WizardLayout2Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardLayout2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
