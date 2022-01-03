import { Component, Output, EventEmitter, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'cs-animation-layout-4',
  templateUrl: 'animation-layout-4.page.html',
  styleUrls: ['animation-layout-4.page.scss'],
})
export class AnimationLayout4Page implements OnChanges {
  @Input() data: any;

  @Output() onItemClick = new EventEmitter();
  @Output() onExplore = new EventEmitter();
  @Output() onShare = new EventEmitter();

  constructor() { }

  ngOnChanges(changes: { [propKey: string]: any }) {
    this.data = changes['data'].currentValue;
  }

  onItemClickFunc(item): void {
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
