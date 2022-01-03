import { Component, Output, EventEmitter, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'cs-forgot-password-layout-1',
  templateUrl: 'forgot-password-layout-1.page.html',
  styleUrls: ['forgot-password-layout-1.page.scss'],
})
export class ForgotPasswordLayout1Page implements OnChanges {
  @Input() data: any;

  @Output() onSend = new EventEmitter();

  private isEmailValid = true;
  private regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  item = {
    'email': ''
  };

  constructor() { }

  ngOnChanges(changes: { [propKey: string]: any }) {
    this.data = changes['data'].currentValue;
  }

  onSendFunc(): void {
    if (event) {
      event.stopPropagation();
    }
    if (this.validate()) {
      this.onSend.emit(this.item);
    }
  }

  validate(): boolean {
    this.isEmailValid = true;
    this.isEmailValid = this.regex.test(this.item.email);
    return this.isEmailValid;
  }
}
