import { Component, Output, EventEmitter, Input, OnChanges, AfterViewInit } from '@angular/core';

@Component({
  selector: 'cs-forms-layout-4',
  templateUrl: 'forms-layout-4.page.html',
  styleUrls: ['forms-layout-4.page.scss'],
})
export class FormsLayout4Page implements OnChanges, AfterViewInit {
  @Input() data: any;
  @Output() onRates = new EventEmitter();
  @Output() onSubmit = new EventEmitter();
  @Output() onAddImage = new EventEmitter();

  item = {
    'description': '',
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

  onRatesFunc(items: any, index: number) {
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
  }

  onAddVideoPhoto() {
    if (event) {
      event.stopPropagation();
    }
    this.item['selectedStarIndex'] = this.index + 1;
    this.onAddImage.emit(this.item);
  }

  resetValue() {
    this.item.description = '';
    this.item.selectedStarIndex = 0;
  }
}
