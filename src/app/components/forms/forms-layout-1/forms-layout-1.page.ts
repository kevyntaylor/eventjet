import { Component, Output, EventEmitter, Input, OnChanges, AfterViewInit } from '@angular/core';

@Component({
  selector: 'cs-forms-layout-1',
  templateUrl: 'forms-layout-1.page.html',
  styleUrls: ['forms-layout-1.page.scss'],
})
export class FormsLayout1Page implements OnChanges, AfterViewInit {
  @Input() data: any;
  @Output() onSubmit = new EventEmitter();

  item = {
    'name': '',
    'title': '',
    'description': ''
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
    this.item.name = '';
    this.item.title = '';
    this.item.description = '';
  }
}
