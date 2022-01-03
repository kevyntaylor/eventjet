import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapLayout2Page } from './map-layout-2.page';

describe('MapLayout2Page', () => {
  let component: MapLayout2Page;
  let fixture: ComponentFixture<MapLayout2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MapLayout2Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapLayout2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
