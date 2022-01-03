import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileLayout3Page } from './profile-layout-3.page';

describe('ProfileLayout3Page', () => {
  let component: ProfileLayout3Page;
  let fixture: ComponentFixture<ProfileLayout3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileLayout3Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileLayout3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
