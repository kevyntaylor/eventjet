import { Component, Output, EventEmitter, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'cs-select-layout-1',
  templateUrl: 'select-layout-1.page.html',
  styleUrls: ['select-layout-1.page.scss'],
})
export class SelectLayout1Page implements OnChanges {
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
