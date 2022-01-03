import { Component, Output, EventEmitter, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'cs-range-layout-1',
  templateUrl: 'range-layout-1.page.html',
  styleUrls: ['range-layout-1.page.scss'],
})
export class RangeLayout1Page implements OnChanges {
  @Input() data: any;

  @Output() onChange = new EventEmitter();

  ngOnChanges(changes: { [propKey: string]: any }) {
    this.data = changes['data'].currentValue;
  }

  onChangeFunc(): void {
    if (event) {
      event.stopPropagation();
    }
    this.onChange.emit(this.data);
  }
}
