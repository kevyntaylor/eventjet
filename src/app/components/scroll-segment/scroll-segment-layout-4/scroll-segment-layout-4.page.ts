import { Component, Output, EventEmitter, Input, OnChanges, AfterViewInit } from '@angular/core';

@Component({
  selector: 'cs-scroll-segment-layout-4',
  templateUrl: 'scroll-segment-layout-4.page.html',
  styleUrls: ['scroll-segment-layout-4.page.scss'],
})
export class ScrollSegmentLayout4Page implements OnChanges, AfterViewInit {
  @Input() data: any;
  @Output() onItemClick = new EventEmitter();
  @Output() onFollowClick = new EventEmitter();
  @Output() onMessageClick = new EventEmitter();

  viewEntered = false;

  constructor() { }

  ngAfterViewInit() {
    this.viewEntered = true;
  }

  ngOnChanges(changes: { [propKey: string]: any }) {
    if (changes['data']) {
      this.data = changes['data'].currentValue;
    }
  }

  onItemClickFunc(item): void {
    if (event) {
      event.stopPropagation();
    }
    this.onItemClick.emit(item);
  }

  onFollowFunc() {
    if (event) {
      event.stopPropagation();
    }
    this.onFollowClick.emit();
  }

  onMessageFunc() {
    if (event) {
      event.stopPropagation();
    }
    this.onMessageClick.emit();
  }
}