import { Component, Output, EventEmitter, Input, OnChanges, AfterViewInit } from '@angular/core';

@Component({
  selector: 'cs-map-layout-1',
  templateUrl: 'map-layout-1.page.html',
  styleUrls: ['map-layout-1.page.scss'],
})
export class MapLayout1Page implements OnChanges, AfterViewInit {
  @Input() data: any;

  @Output() onRates = new EventEmitter();
  @Output() onLike = new EventEmitter();
  @Output() onFavorite = new EventEmitter();
  @Output() onShare = new EventEmitter();

  viewEntered = false;

  constructor() { }

  ngAfterViewInit() {
    this.viewEntered = true;    
  }

  ngOnChanges(changes: { [propKey: string]: any }) {
    this.data = changes['data'].currentValue;
  }

  onRatesFunc(params, index: number) {
    if (event) {
      event.stopPropagation();
    }
    for (let i = 0; i < params.length; i++) {
      params[i].isActive = i <= index;
    }
    this.onRates.emit(index);
  }

  onLikeFunc(params) {
    if (event) {
      event.stopPropagation();
    }
    this.onLike.emit(params);
  }

  onFavoriteFunc(params) {
    if (event) {
      event.stopPropagation();
    }
    this.onFavorite.emit(params);
  }

  onShareFunc(params) {
    if (event) {
      event.stopPropagation();
    }
    this.onShare.emit(params);
  }

}
