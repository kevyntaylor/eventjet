import { Component, Output, EventEmitter, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'cs-radio-button-layout-3',
  templateUrl: 'radio-button-layout-3.page.html',
  styleUrls: ['radio-button-layout-3.page.scss'],
})
export class RadioButtonLayout3Page implements OnChanges {
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
