import { Component, Output, EventEmitter, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'cs-google-card-list-layout-3',
  templateUrl: 'google-card-list-layout-3.page.html',
  styleUrls: ['google-card-list-layout-3.page.scss'],
})
export class GoogleCardListLayout3Page implements OnChanges {
  @Input() data: any;

  @Output() onItemClick = new EventEmitter();

  ngOnChanges(changes: { [propKey: string]: any }) {
    this.data = changes['data'].currentValue;
  }

  onItemClickFunc(item) {
    if (event) {
      event.stopPropagation();
    }
    this.onItemClick.emit(item);
  }
}
