import { Component, Output, EventEmitter, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'cs-google-card-list-layout-2',
  templateUrl: 'google-card-list-layout-2.page.html',
  styleUrls: ['google-card-list-layout-2.page.scss'],
})
export class GoogleCardListLayout2Page implements OnChanges {
  @Input() data: any;

  @Output() onItemClick = new EventEmitter();
  @Output() onExplore = new EventEmitter();
  @Output() onShare = new EventEmitter();

  ngOnChanges(changes: { [propKey: string]: any }) {
    this.data = changes['data'].currentValue;
  }

  onItemClickFunc(item) {
    if (event) {
      event.stopPropagation();
    }
    this.onItemClick.emit(item);
  }

  onShareFunc(item) {
    if (event) {
      event.stopPropagation();
    }
    this.onShare.emit(item);
  }

  onExploreFunc(item) {
    if (event) {
      event.stopPropagation();
    }
    this.onExplore.emit(item);
  }
}
