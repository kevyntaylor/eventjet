import { Component, Output, EventEmitter, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'cs-parallax-layout-4',
  templateUrl: 'parallax-layout-4.page.html',
  styleUrls: ['parallax-layout-4.page.scss'],
})
export class ParallaxLayout4Page implements OnChanges {
  @Input() data: any;
  @Output() onLike = new EventEmitter();
  @Output() onFavorite = new EventEmitter();
  @Output() onShare = new EventEmitter();
  @Output() onItemClick = new EventEmitter();
  @Output() onRates = new EventEmitter();

  isHeaderVisible = false;

  constructor() { }

  ngOnChanges(changes: { [propKey: string]: any }) {
    this.data = changes['data'].currentValue;
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

  onItemClickFunc(params) {
    if (event) {
      event.stopPropagation();
    }
    this.onItemClick.emit(params);
  }

  onRatesFunc(params, index: number) {
    if (event) {
      event.stopPropagation();
    }
    for (var i = 0; i < params.length; i++) {
      params[i].isActive = i <= index;
    }
    this.onRates.emit(index);
  }

  scrolling(event) {
    setTimeout(()=> {
      this.isHeaderVisible = event.detail.currentY > 158
    })
  }
}
