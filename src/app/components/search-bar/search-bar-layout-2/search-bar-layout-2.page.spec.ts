import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarLayout2Page } from './search-bar-layout-2.page';

describe('SearchBarLayout2Page', () => {
  let component: SearchBarLayout2Page;
  let fixture: ComponentFixture<SearchBarLayout2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchBarLayout2Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarLayout2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
