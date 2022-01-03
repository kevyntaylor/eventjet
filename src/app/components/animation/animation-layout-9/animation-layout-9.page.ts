import { Component, Output, EventEmitter, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'cs-animation-layout-9',
  templateUrl: 'animation-layout-9.page.html',
  styleUrls: ['animation-layout-9.page.scss'],
})
export class AnimationLayout9Page implements OnChanges {
  @Input() data: any;

  @Output() onItemClick = new EventEmitter();
  @Output() onLike = new EventEmitter();
  @Output() onComment = new EventEmitter();

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
  onLikeFunc(params, event) {
    if (event) {
      event.stopPropagation();
    }
    this.onLike.emit(params);
  }

  onCommentFunc(params, event) {
    if (event) {
      event.stopPropagation();
    }
    this.onComment.emit(params);
  }
}
