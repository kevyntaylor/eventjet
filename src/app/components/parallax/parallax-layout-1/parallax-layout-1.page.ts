import { Component, Output, EventEmitter, Input, OnChanges, HostListener } from '@angular/core';
import { fail } from 'assert';

@Component({
  selector: 'cs-parallax-layout-1',
  templateUrl: 'parallax-layout-1.page.html',
  styleUrls: ['parallax-layout-1.page.scss'],
})
export class ParallaxLayout1Page implements OnChanges {
  @Input() data: any;
  @Output() onLike = new EventEmitter();
  @Output() onFavorite = new EventEmitter();
  @Output() onShare = new EventEmitter();
  @Output() onItemClick = new EventEmitter();

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

  scrolling(event) {
    setTimeout(()=> {
      this.isHeaderVisible = event.detail.currentY > 230
    })
  }
}
