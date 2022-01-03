import { Component, Output, EventEmitter, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'cs-expandable-list-layout-3',
  templateUrl: 'expandable-list-layout-3.page.html',
  styleUrls: ['expandable-list-layout-3.page.scss'],
})
export class ExpandableListLayout3Page implements OnChanges {
  @Input() data: any;

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

  toggleGroup(group: any) {
    if (event) {
      event.stopPropagation();
    }
    group.show = !group.show;
  }
}
