import { Component, Output, EventEmitter, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'cs-toggle-button-layout-3',
  templateUrl: 'toggle-button-layout-3.page.html',
  styleUrls: ['toggle-button-layout-3.page.scss'],
})
export class ToggleButtonLayout3Page implements OnChanges {
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
