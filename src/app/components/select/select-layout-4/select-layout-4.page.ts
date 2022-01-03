import { Component, Output, EventEmitter, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'cs-select-layout-4',
  templateUrl: 'select-layout-4.page.html',
  styleUrls: ['select-layout-4.page.scss'],
})
export class SelectLayout4Page implements OnChanges {
  @Input() data: any;
  @Output() onChangeMonth = new EventEmitter();
  @Output() onChangeYears = new EventEmitter();

  constructor() { }

  ngOnChanges(changes: { [propKey: string]: any }) {
    this.data = changes['data'].currentValue;
  }

  onChangeMonthFunc() {
    if (event) {
      event.stopPropagation();
    }
    this.onChangeMonth.emit(this.data);
  }

  onChangeYearsFunc() {
    if (event) {
      event.stopPropagation();
    }
    this.onChangeYears.emit(this.data);
  }

}
