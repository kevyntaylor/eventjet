import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileLayout1Page } from './profile-layout-1.page';

describe('ProfileLayout1Page', () => {
  let component: ProfileLayout1Page;
  let fixture: ComponentFixture<ProfileLayout1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileLayout1Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileLayout1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
