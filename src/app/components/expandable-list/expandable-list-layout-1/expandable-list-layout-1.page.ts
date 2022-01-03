import { Component, Output, EventEmitter, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'cs-expandable-list-layout-1',
  templateUrl: 'expandable-list-layout-1.page.html',
  styleUrls: ['expandable-list-layout-1.page.scss'],
})
export class ExpandableListLayout1Page implements OnChanges {
  
  @Input() data: any;
  @Output() onItemClick = new EventEmitter();
  @Output() onLike = new EventEmitter();
  @Output() onFavorite = new EventEmitter();
  @Output() onShare = new EventEmitter();

  constructor() { }

  ngOnChanges(changes: { [propKey: string]: any }) {
    this.data = changes['data'].currentValue;
  }

  onItemClickFunc(item) {
    if (event) {
      event.stopPropagation();
    }
    this.onItemClick.emit(item);
  }

  onLikeFunc(item) {
    if (event) {
      event.stopPropagation();
    }
    this.onLike.emit(item);
  }

  onFavoriteFunc(item) {
    if (event) {
      event.stopPropagation();
    }
    this.onFavorite.emit(item);
  }

  onShareFunc(item) {
    if (event) {
      event.stopPropagation();
    }
    this.onShare.emit(item);
  }

  toggleGroup(group: any) {
    if (event) {
      event.stopPropagation();
    }
    group.show = !group.show;
  }
}
