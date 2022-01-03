import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabLayout2Page } from './tab-layout-2.page';

describe('TabLayout2Page', () => {
  let component: TabLayout2Page;
  let fixture: ComponentFixture<TabLayout2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabLayout2Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabLayout2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
