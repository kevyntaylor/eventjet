import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleCardListLayout1Page } from './google-card-list-layout-1.page';

describe('GoogleCardListLayout1Page', () => {
  let component: GoogleCardListLayout1Page;
  let fixture: ComponentFixture<GoogleCardListLayout1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GoogleCardListLayout1Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleCardListLayout1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
