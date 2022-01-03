import { Component, Output, EventEmitter, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'cs-login-layout-2',
  templateUrl: 'login-layout-2.page.html',
  styleUrls: ['login-layout-2.page.scss'],
})
export class LoginLayout2Page implements OnChanges {
  @Input() data: any;

  @Output() onLogin = new EventEmitter();
  @Output() onRegister = new EventEmitter();
  @Output() onSkip = new EventEmitter();
  @Output() onFacebook = new EventEmitter();
  @Output() onTwitter = new EventEmitter();
  @Output() onGoogle = new EventEmitter();
  @Output() onPinterest = new EventEmitter();

  private isUsernameValid = true;
  private isPasswordValid = true;

  item = {
    'username': '',
    'password': ''
  };

  constructor() { }

  ngOnChanges(changes: { [propKey: string]: any }) {
    this.data = changes['data'].currentValue;
  }

  onLoginFunc(): void {
    if (event) {
      event.stopPropagation();
    }
    if (this.validate()) {
      this.onLogin.emit(this.item);
    }
  }

  onRegisterFunc(): void {
    if (event) {
      event.stopPropagation();
    }
    if (this.validate()) {
      this.onRegister.emit(this.item);
    }
  }

  onFacebookFunc(): void {
    if (event) {
      event.stopPropagation();
    }
    this.onLogin.emit(this.item);
  }

  onTwitterFunc(): void {
    if (event) {
      event.stopPropagation();
    }
    this.onTwitter.emit(this.item);
  }

  onGoogleFunc(): void {
    if (event) {
      event.stopPropagation();
    }
    this.onGoogle.emit(this.item);
  }

  onPinterestFunc(): void {
    if (event) {
      event.stopPropagation();
    }
    this.onPinterest.emit(this.item);
  }

  onSkipFunc(): void {
    if (event) {
      event.stopPropagation();
    }
    this.onSkip.emit(this.item);
  }

  validate(): boolean {
    this.isUsernameValid = true;
    this.isPasswordValid = true;
    if (!this.item.username || this.item.username.length === 0) {
      this.isUsernameValid = false;
    }

    if (!this.item.password || this.item.password.length === 0) {
      this.isPasswordValid = false;
    }

    return this.isPasswordValid && this.isUsernameValid;
  }
}
