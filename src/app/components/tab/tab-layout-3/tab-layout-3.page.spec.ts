import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabLayout3Page } from './tab-layout-3.page';

describe('TabLayout3Page', () => {
  let component: TabLayout3Page;
  let fixture: ComponentFixture<TabLayout3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabLayout3Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabLayout3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
