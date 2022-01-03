import { Component, Output, EventEmitter, Input, ViewChild, OnChanges } from '@angular/core';

@Component({
  selector: 'cs-swipe-to-dismiss-list-layout-3',
  templateUrl: 'swipe-to-dismiss-list-layout-3.page.html',
  styleUrls: ['swipe-to-dismiss-list-layout-3.page.scss'],
})
export class SwipeToDismissListLayout3Page implements OnChanges {
  @ViewChild('sliding', {static: false}) sliding;
  @ViewChild('dynamicList', {static: false}) dynamicList;

  @Input() data: any;

  @Output() onItemClick = new EventEmitter();
  @Output() onUndo = new EventEmitter();
  @Output() onDelete = new EventEmitter();

  constructor() { }

  ngOnChanges(changes: { [propKey: string]: any }) {
    this.data = changes['data'].currentValue;
  }

  onUndoFunc = () => {
    if (event) {
      event.stopPropagation();
    }
    this.sliding.closeOpened();
  }

  onDeleteFunc = (item: any): void => {
    if (event) {
      event.stopPropagation();
    }
    this.dynamicList.closeSlidingItems()
    const index = this.data.items.indexOf(item);
    if (index > -1) {
      this.data.items.splice(index, 1);
    }
  }
  onItemClickFunc(item) {
    if (event) {
      event.stopPropagation();
    }
    this.onItemClick.emit(item);
  }
}
