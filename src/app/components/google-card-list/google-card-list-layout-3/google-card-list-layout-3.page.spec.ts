import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleCardListLayout3Page } from './google-card-list-layout-3.page';

describe('GoogleCardListLayout3Page', () => {
  let component: GoogleCardListLayout3Page;
  let fixture: ComponentFixture<GoogleCardListLayout3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GoogleCardListLayout3Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleCardListLayout3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
