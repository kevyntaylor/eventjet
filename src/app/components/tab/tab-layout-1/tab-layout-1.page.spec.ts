import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabLayout1Page } from './tab-layout-1.page';

describe('TabLayout1Page', () => {
  let component: TabLayout1Page;
  let fixture: ComponentFixture<TabLayout1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabLayout1Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabLayout1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
