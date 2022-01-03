import { Component, Output, EventEmitter, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'cs-payment-layout-1',
  templateUrl: 'payment-layout-1.page.html',
  styleUrls: ['payment-layout-1.page.scss'],
})
export class PaymentLayout1Page implements OnChanges {

  @Input() data: any;
  @Output() onPay = new EventEmitter();

  constructor() { }

  cardItem = {
    'cardNumber': '',
    'cardHolder': '',
    'birth': '',
    'code': ''
  };

  ngOnChanges(changes: { [propKey: string]: any }) {
    this.data = changes['data'].currentValue;
  }

  onPayFunc(): void {
    if (event) {
      event.stopPropagation();
    }
    this.onPay.emit(this.cardItem);
  }
}
