import { Component, Output, EventEmitter, Input, OnChanges, AfterViewInit } from '@angular/core';

@Component({
  selector: 'cs-forms-layout-2',
  templateUrl: 'forms-layout-2.page.html',
  styleUrls: ['forms-layout-2.page.scss'],
})
export class FormsLayout2Page implements OnChanges, AfterViewInit {

  @Input() data: any;
  @Output() onRates = new EventEmitter();
  @Output() onSubmit = new EventEmitter();

  item = {
    'description': '',
    'title': '',
    'selectedStarIndex': 0
  };
  index = 0;

  viewEntered = false;

  constructor() {
    if (this.data) {
      for (let i = 0; i < this.data.iconsStars.length; i++) {
        if (this.data.iconsStars[i].isActive) {
          this.index++;
        } else {
          return;
        }
      }
    }
  }

  ngAfterViewInit() {
    this.viewEntered = true;    
  }

  ngOnChanges(changes: { [propKey: string]: any }) {
    this.data = changes['data'].currentValue;
  }

  onRatesFunc(items: any, index: number, e: any) {
    if (event) {
      event.stopPropagation();
    }
    this.index = index;
    for (let i = 0; i < items.length; i++) {
      items[i].isActive = i <= index;
    }
    this.item['selectedStarIndex'] = this.index + 1;
    this.onRates.emit(this.item);
  }

  onSubmitFunc() {
    if (event) {
      event.stopPropagation();
    }
    this.item['selectedStarIndex'] = this.index + 1;
    this.onSubmit.emit(this.item);
    this.resetValue();
  }

  resetValue() {
    this.item.description = '';
    this.item.title = '';
    this.item.selectedStarIndex = 0;
  }
}
