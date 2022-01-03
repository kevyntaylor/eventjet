import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QrcodeLayout1Page } from './qrcode-layout-1.page';

describe('QrcodeLayout1Page', () => {
  let component: QrcodeLayout1Page;
  let fixture: ComponentFixture<QrcodeLayout1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QrcodeLayout1Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrcodeLayout1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
