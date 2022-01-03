import { Component, Output, EventEmitter, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'cs-select-layout-5',
  templateUrl: 'select-layout-5.page.html',
  styleUrls: ['select-layout-5.page.scss'],
})
export class SelectLayout5Page implements OnChanges {
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
