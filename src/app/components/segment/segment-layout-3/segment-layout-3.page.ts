import { Component, Output, EventEmitter, Input, OnChanges, AfterViewInit } from '@angular/core';

@Component({
  selector: 'cs-segment-layout-3',
  templateUrl: 'segment-layout-3.page.html',
  styleUrls: ['segment-layout-3.page.scss'],
})
export class SegmentListLayout3Page implements OnChanges, AfterViewInit {
  @Input() data: any;
  @Output() onItemClick = new EventEmitter();
  @Output() onLike = new EventEmitter();
  @Output() onComment = new EventEmitter();

  selectedItem = 'Page1';
  viewEntered = false;

  constructor() { }

  ngAfterViewInit() {
    this.viewEntered = true;    
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

  onCommentFunc(item) {
    if (event) {
      event.stopPropagation();
    }
    this.onComment.emit(item);
  }

  ngOnChanges(changes: { [propKey: string]: any }) {
    this.data = changes['data'].currentValue;
  }

  isEnabled(value: string): boolean {
    return this.selectedItem === value;
  }
}
