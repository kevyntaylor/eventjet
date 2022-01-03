import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardLayout3Page } from './wizard-layout-3.page';

describe('WizardLayout3Page', () => {
  let component: WizardLayout3Page;
  let fixture: ComponentFixture<WizardLayout3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WizardLayout3Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardLayout3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
