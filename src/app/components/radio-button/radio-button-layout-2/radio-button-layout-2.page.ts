import { Component, Output, EventEmitter, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'cs-radio-button-layout-2',
  templateUrl: 'radio-button-layout-2.page.html',
  styleUrls: ['radio-button-layout-2.page.scss'],
})
export class RadioButtonLayout2Page implements OnChanges {
  @Input() data: any;

  @Output() onItemClick = new EventEmitter();

  constructor() { }

  ngOnChanges(changes: { [propKey: string]: any }) {
    this.data = changes['data'].currentValue;
  }

  onItemClickFunc(item): void {
    this.onItemClick.emit(item);
  }
}
