import { Component, Output, EventEmitter, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'cs-timeline-layout-3',
  templateUrl: 'timeline-layout-3.page.html',
  styleUrls: ['timeline-layout-3.page.scss'],
})
export class TimeLineLayout3Page implements OnChanges {
  @Input() data: any;

  @Output() onItemClick = new EventEmitter();

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
}
