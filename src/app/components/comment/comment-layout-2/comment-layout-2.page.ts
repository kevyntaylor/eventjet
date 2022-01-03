import { Component, Output, EventEmitter, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'cs-comment-layout-2',
  templateUrl: 'comment-layout-2.page.html',
  styleUrls: ['comment-layout-2.page.scss'],
})
export class CommentLayout2Page implements OnChanges {
  @Input() data: any;

  @Output() onItemClick = new EventEmitter();

  constructor() { }

  ngOnChanges(changes: { [propKey: string]: any }) {
    this.data = changes['data'].currentValue;
  }

  onItemClickFunc(): void {
    if (event) {
      event.stopPropagation();
    }
    this.onItemClick.emit();
  }
}
