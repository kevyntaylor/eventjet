import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwipeToDismissListLayout2Page } from './swipe-to-dismiss-list-layout-2.page';

describe('SwipeToDismissListLayout2Page', () => {
  let component: SwipeToDismissListLayout2Page;
  let fixture: ComponentFixture<SwipeToDismissListLayout2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SwipeToDismissListLayout2Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwipeToDismissListLayout2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
