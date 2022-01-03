
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

import { PaymentService } from './../../services/payment-service';
import { ToastService } from 'src/app/services/toast-service';

@Component({
    templateUrl: 'item-details-payment.page.html',
    styleUrls: ['item-details-payment.page.scss'],
    providers: [PaymentService]
})
export class ItemDetailsPaymentPage {

    data = {};
    type: string;

    constructor(
        public navCtrl: NavController,
        private service: PaymentService,
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
    onPay(params): void {
        this.toastCtrl.presentToast('onPay:' + JSON.stringify(params));
    }
}
