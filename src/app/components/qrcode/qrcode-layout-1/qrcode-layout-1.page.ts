import { Component } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'cs-qrcode-layout-1',
  templateUrl: 'qrcode-layout-1.page.html',
  styleUrls: ['qrcode-layout-1.page.scss']
})
export class QrcodeLayout1Page {

  scannedData: {};

  barcodeScannerOptions: BarcodeScannerOptions = {
    showTorchButton: true,
    showFlipCameraButton: true
  };

  constructor(private barcodeScanner: BarcodeScanner) {
    this.scanCode();
  }

  scanCode() {
    if (event) {
      event.stopPropagation();
    }
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedData = barcodeData;
    }).catch(err => {
      console.log('Error', err);
    });
  }

  public getScannedData() {
    return this.scannedData;
  }
}
