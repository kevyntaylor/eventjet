import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleCardListLayout4Page } from './google-card-list-layout-4.page';

describe('GoogleCardListLayout4Page', () => {
  let component: GoogleCardListLayout4Page;
  let fixture: ComponentFixture<GoogleCardListLayout4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleCardListLayout4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleCardListLayout4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
