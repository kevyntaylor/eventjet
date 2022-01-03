import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarLayout3Page } from './search-bar-layout-3.page';

describe('SearchBarLayout3Page', () => {
  let component: SearchBarLayout3Page;
  let fixture: ComponentFixture<SearchBarLayout3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchBarLayout3Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarLayout3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
