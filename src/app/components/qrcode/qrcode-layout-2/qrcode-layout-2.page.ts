import { Component, Output, EventEmitter, Input } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'cs-qrcode-layout-2',
  templateUrl: 'qrcode-layout-2.page.html',
  styleUrls: ['qrcode-layout-2.page.scss']
})
export class QrcodeLayout2Page {
  @Input() data: any;
  @Output() onButtonClick = new EventEmitter();

  encodeData: any;
  encodedData = '';

  constructor(private barcodeScanner: BarcodeScanner) { }

  onButtonClickFunc() {
    if (event) {
      event.stopPropagation();
    }
    this.barcodeScanner
      .encode(this.barcodeScanner.Encode.TEXT_TYPE, this.encodeData)
      .then((encodedData) => {
        this.encodeData = encodedData;
        this.onButtonClick.emit(encodedData);
      }, (err) => {
        console.log('Error occured : ' + err);
      });
  }
}
