import { Component, Output, EventEmitter, Input, OnChanges, AfterViewInit } from '@angular/core';

@Component({
  selector: 'cs-profile-layout-4',
  templateUrl: 'profile-layout-4.page.html',
  styleUrls: ['profile-layout-4.page.scss'],
})
export class ProfileLayout4Page implements OnChanges, AfterViewInit {
  @Input() data: any;

  @Output() onItemClick = new EventEmitter();
  @Output() onLike = new EventEmitter();
  @Output() onComment = new EventEmitter();

  viewEntered = false;

  constructor() { }

  ngAfterViewInit() {
    this.viewEntered = true;
  }

  ngOnChanges(changes: { [propKey: string]: any }) {
    this.data = changes['data'].currentValue;
  }

  onItemClickFunc(params) {
    if (event) {
      event.stopPropagation();
    }
    this.onItemClick.emit(params);
  }

  onLikeFunc(params) {
    if (event) {
      event.stopPropagation();
    }
    this.onLike.emit(params);
  }

  onCommentFunc(params) {
    if (event) {
      event.stopPropagation();
    }
    this.onComment.emit(params);
  }
}
