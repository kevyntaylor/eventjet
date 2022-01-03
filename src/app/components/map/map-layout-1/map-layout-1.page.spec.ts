import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapLayout1Page } from './map-layout-1.page';

describe('MapLayout1Page', () => {
  let component: MapLayout1Page;
  let fixture: ComponentFixture<MapLayout1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MapLayout1Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapLayout1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
