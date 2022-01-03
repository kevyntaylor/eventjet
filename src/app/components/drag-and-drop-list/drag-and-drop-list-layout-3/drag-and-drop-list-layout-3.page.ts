import { Component, Output, EventEmitter, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'cs-drag-and-drop-list-layout-3',
  templateUrl: 'drag-and-drop-list-layout-3.page.html',
  styleUrls: ['drag-and-drop-list-layout-3.page.scss'],
})
export class DragAndDropListLayout3Page implements OnChanges {
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

  ionItemReorder = (ev): void => {
    this.data.items.splice(ev.detail.to, 0, this.data.items.splice(ev.detail.from, 1)[0]);
    ev.detail.complete();
  }
}
