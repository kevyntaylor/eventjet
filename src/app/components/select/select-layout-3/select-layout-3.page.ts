import { Component, Output, EventEmitter, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'cs-select-layout-3',
  templateUrl: 'select-layout-3.page.html',
  styleUrls: ['select-layout-3.page.scss'],
})
export class SelectLayout3Page implements OnChanges {
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
