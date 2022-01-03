import { Component, Output, EventEmitter, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'cs-new-password-layout-2',
  templateUrl: 'new-password-layout-2.page.html',
  styleUrls: ['new-password-layout-2.page.scss'],
})
export class NewPasswordLayout2Page implements OnChanges {
  @Input() data: any;

  @Output() onDone = new EventEmitter();

  private isConfrimValid = true;
  private isPasswordValid = true;

  item = {
    'password': '',
    'confrim': ''
  };

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

    if (!this.item.password) {
      this.isPasswordValid = false;
    }

    if (!this.item.confrim) {
      this.isConfrimValid = false;
    }

    if (this.item.confrim !== this.item.password) {
      this.isConfrimValid = false;
    }

    return this.isPasswordValid && this.isConfrimValid;
  }
}
