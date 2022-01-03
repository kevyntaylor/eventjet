import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwipeToDismissListLayout3Page } from './swipe-to-dismiss-list-layout-3.page';

describe('SwipeToDismissListLayout3Page', () => {
  let component: SwipeToDismissListLayout3Page;
  let fixture: ComponentFixture<SwipeToDismissListLayout3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SwipeToDismissListLayout3Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwipeToDismissListLayout3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
