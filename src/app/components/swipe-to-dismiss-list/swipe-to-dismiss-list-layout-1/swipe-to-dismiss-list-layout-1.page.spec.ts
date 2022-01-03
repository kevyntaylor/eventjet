import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwipeToDismissListLayout1Page } from './swipe-to-dismiss-list-layout-1.page';

describe('SwipeToDismissListLayout1Page', () => {
  let component: SwipeToDismissListLayout1Page;
  let fixture: ComponentFixture<SwipeToDismissListLayout1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SwipeToDismissListLayout1Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwipeToDismissListLayout1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
