import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleCardListLayout2Page } from './google-card-list-layout-2.page';

describe('GoogleCardListLayout2Page', () => {
  let component: GoogleCardListLayout2Page;
  let fixture: ComponentFixture<GoogleCardListLayout2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GoogleCardListLayout2Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleCardListLayout2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
