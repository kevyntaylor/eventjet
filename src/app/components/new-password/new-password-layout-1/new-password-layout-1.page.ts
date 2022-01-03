import { Component, Output, EventEmitter, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'cs-new-password-layout-1',
  templateUrl: 'new-password-layout-1.page.html',
  styleUrls: ['new-password-layout-1.page.scss'],
})
export class NewPasswordLayout1Page implements OnChanges {
  @Input() data: any;

  @Output() onDone = new EventEmitter();

  item = {
    'password': '',
    'confrim': ''
  };

  private isConfrimValid = true;
  private isPasswordValid = true;

  constructor() { }

  ngOnChanges(changes: { [propKey: string]: any }) {
    this.data = changes['data'].currentValue;
  }

  onDoneFunc(): void {
    if (event) {
      event.stopPropagation();
    }
    if (this.validate()) {
      this.onDone.emit(this.item);
    }
  }

  validate(): boolean {
    this.isConfrimValid = true;
    this.isPasswordValid = true;

    if (!this.item.password || this.item.password.length === 0) {
      this.isPasswordValid = false;
    }

    if (!this.item.confrim || this.item.confrim.length === 0) {
      this.isConfrimValid = false;
    }

    if (this.item.password !== this.item.confrim) {
      this.isConfrimValid = false;
    }

    return this.isPasswordValid && this.isConfrimValid;
  }
}
