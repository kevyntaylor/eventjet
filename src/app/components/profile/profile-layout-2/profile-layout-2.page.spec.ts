import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileLayout2Page } from './profile-layout-2.page';

describe('ProfileLayout2Page', () => {
  let component: ProfileLayout2Page;
  let fixture: ComponentFixture<ProfileLayout2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileLayout2Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileLayout2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
