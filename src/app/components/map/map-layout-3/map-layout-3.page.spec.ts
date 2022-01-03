import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapLayout3Page } from './map-layout-3.page';

describe('MapLayout3Page', () => {
  let component: MapLayout3Page;
  let fixture: ComponentFixture<MapLayout3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MapLayout3Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapLayout3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
