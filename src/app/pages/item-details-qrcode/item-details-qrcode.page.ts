import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

import { QRCodeService } from './../../services/qrcode-service';
import { ActivatedRoute } from '@angular/router';
import { ToastService } from 'src/app/services/toast-service';

@Component({
    templateUrl: 'item-details-qrcode.page.html',
    styleUrls: ['item-details-qrcode.page.scss'],
    providers: [QRCodeService]
})
export class ItemDetailsQrcodePage {
    data = {};
    type: string;

    constructor(
        public navCtrl: NavController,
        private service: QRCodeService,
        private toastCtrl: ToastService,
        private route: ActivatedRoute) {
        this.type = this.route.snapshot.paramMap.get('type');
        this.service.load(service.getAllThemes()[this.type]).subscribe(d => {
            this.data = d;
        });
    }

    isType(item) {
        return item === parseInt(this.type, 10);
    }

    // events
    onButtonClick(params): void {
        this.toastCtrl.presentToast('onButtonClick:' + JSON.stringify(params));
    }
}
