import { Component, Output, EventEmitter, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'cs-register-layout-1',
  templateUrl: 'register-layout-1.page.html',
  styleUrls: ['register-layout-1.page.scss'],
})
export class RegisterLayout1Page implements OnChanges {
  @Input() data: any;

  @Output() onRegister = new EventEmitter();
  @Output() onSkip = new EventEmitter();

  private isEmailValid = true;
  private isUsernameValid = true;
  private isPasswordValid = true;
  private isCityValid = true;
  private isCountryValid = true;

  private regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  item = {
    'username': '',
    'password': '',
    'country': '',
    'city': '',
    'email': ''
  };

  constructor() { }

  ngOnChanges(changes: { [propKey: string]: any }) {
    this.data = changes['data'].currentValue;
  }

  onRegisterFunc(): void {
    if (event) {
      event.stopPropagation();
    }
    if (this.validate()) {
      this.onRegister.emit(this.item);
    }
  }

  onSkipFunc(): void {
    if (event) {
      event.stopPropagation();
    }
    if (this.validate()) {
      this.onSkip.emit(this.item);
    }
  }

  validate(): boolean {
    this.isEmailValid = true;
    this.isUsernameValid = true;
    this.isPasswordValid = true;
    this.isCityValid = true;
    this.isCountryValid = true;

    if (!this.item.username || this.item.username.length === 0) {
      this.isUsernameValid = false;
    }

    if (!this.item.password || this.item.password.length === 0) {
      this.isPasswordValid = false;
    }

    if (!this.item.city || this.item.city.length === 0) {
      this.isCityValid = false;
    }

    if (!this.item.country || this.item.country.length === 0) {
      this.isCountryValid = false;
    }

    this.isEmailValid = this.regex.test(this.item.email);

    return this.isEmailValid &&
      this.isPasswordValid &&
      this.isUsernameValid &&
      this.isCityValid &&
      this.isCountryValid;
  }
}
