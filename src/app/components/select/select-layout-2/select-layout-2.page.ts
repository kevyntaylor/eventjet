import { Component, Output, EventEmitter, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'cs-select-layout-2',
  templateUrl: 'select-layout-2.page.html',
  styleUrls: ['select-layout-2.page.scss'],
})
export class SelectLayout2Page implements OnChanges {
  @Input() data: any;

  @Output() onChange = new EventEmitter();

  constructor() { }

  ngOnChanges(changes: { [propKey: string]: any }) {
    this.data = changes['data'].currentValue;
  }

  onChangeFunc() {
    if (event) {
      event.stopPropagation();
    }
    this.onChange.emit(this.data);
  }
}
