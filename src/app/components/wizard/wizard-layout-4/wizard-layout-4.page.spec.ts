import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardLayout4Page } from './wizard-layout-4.page';

describe('WizardLayout4Page', () => {
  let component: WizardLayout4Page;
  let fixture: ComponentFixture<WizardLayout4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WizardLayout4Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardLayout4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
