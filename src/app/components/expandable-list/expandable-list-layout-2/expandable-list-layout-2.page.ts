import { Component, Output, EventEmitter, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'cs-expandable-list-layout-2',
  templateUrl: 'expandable-list-layout-2.page.html',
  styleUrls: ['expandable-list-layout-2.page.scss'],
})
export class ExpandableListLayout2Page implements OnChanges {
  @Input() data: any;
  @Input() events: any;
  @Output() onItemClick = new EventEmitter();

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

  onEvent(event: string, item: any, e: any) {
    if (this.events[event]) {
      this.events[event](item);
    }
  }

  onStarClass(items: any, index: number, e: any) {
    for (var i = 0; i < items.length; i++) {
      items[i].isActive = i <= index;
    }
  };

  toggleGroup(group: any) {
    if (event) {
      event.stopPropagation();
    }
    group.show = !group.show;
  }
}
