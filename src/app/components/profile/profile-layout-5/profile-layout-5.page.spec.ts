import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileLayout5Page } from './profile-layout-5.page';

describe('ProfileLayout5Page', () => {
  let component: ProfileLayout5Page;
  let fixture: ComponentFixture<ProfileLayout5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileLayout5Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileLayout5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
