import { Component, Output, EventEmitter, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'cs-drag-and-drop-list-layout-2',
  templateUrl: 'drag-and-drop-list-layout-2.page.html',
  styleUrls: ['drag-and-drop-list-layout-2.page.scss'],
})
export class DragAndDropListLayout2Page implements OnChanges {
  @Input() data: any;
  @Output() onItemClick = new EventEmitter();
  @Output() onProceed = new EventEmitter();

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

  onProceedFunc() {
    if (event) {
      event.stopPropagation();
    }
    this.onProceed.emit();
  }

  ionItemReorder = (ev): void => {
    this.data.items.splice(ev.detail.to, 0, this.data.items.splice(ev.detail.from, 1)[0]);
    ev.detail.complete();
  }
}
