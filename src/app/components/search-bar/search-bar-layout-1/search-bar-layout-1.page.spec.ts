import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarLayout1Page } from './search-bar-layout-1.page';

describe('SearchBarLayout1Page', () => {
  let component: SearchBarLayout1Page;
  let fixture: ComponentFixture<SearchBarLayout1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchBarLayout1Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarLayout1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
