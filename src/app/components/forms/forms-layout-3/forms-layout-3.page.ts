import { Component, Output, EventEmitter, Input, OnChanges, AfterViewInit } from '@angular/core';

@Component({
  selector: 'cs-forms-layout-3',
  templateUrl: 'forms-layout-3.page.html',
  styleUrls: ['forms-layout-3.page.scss'],
})
export class FormsLayout3Page implements OnChanges {
  @Input() data: any;
  @Output() onSubmit = new EventEmitter();

  item = {
    'firstName': '',
    'lastName': '',
    'address1': '',
    'address2': '',
    'city': '',
    'zipCode': '',
  };
  viewEntered = false;

  constructor() { }

  ngAfterViewInit() {
    this.viewEntered = true;    
  }


  ngOnChanges(changes: { [propKey: string]: any }) {
    this.data = changes['data'].currentValue;
  }

  onSubmitFunc() {
    if (event) {
      event.stopPropagation();
    }
    this.onSubmit.emit(this.item);
    this.resetValue();
  }

  resetValue() {
    this.item.firstName = '';
    this.item.lastName = '';
    this.item.address1 = '';
    this.item.address2 = '';
    this.item.city = '';
    this.item.zipCode = '';
  }
}
