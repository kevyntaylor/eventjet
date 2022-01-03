import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardLayout1Page } from './wizard-layout-1.page';

describe('WizardLayout1Page', () => {
  let component: WizardLayout1Page;
  let fixture: ComponentFixture<WizardLayout1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WizardLayout1Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardLayout1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
