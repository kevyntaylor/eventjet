import { Component, Output, EventEmitter, Input, OnChanges, AfterViewInit } from '@angular/core';

@Component({
  selector: 'cs-map-layout-3',
  templateUrl: 'map-layout-3.page.html',
  styleUrls: ['map-layout-3.page.scss'],
})
export class MapLayout3Page implements OnChanges, AfterViewInit {
  @Input() data: any;

  viewEntered = false;

  constructor() { }

  ngAfterViewInit() {
    this.viewEntered = true;    
  }

  ngOnChanges(changes: { [propKey: string]: any }) {
    this.data = changes['data'].currentValue;
  }
}
