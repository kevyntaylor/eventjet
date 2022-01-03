import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

import { ForgetPasswordService } from './../../services/forget-password-services';

import { ToastService } from 'src/app/services/toast-service';

@Component({
    templateUrl: 'item-details-forgot-password.page.html',
    styleUrls: ['item-details-forgot-password.page.scss'],
    providers: [ForgetPasswordService]

})
export class ItemDetailsForgotPasswordPage {

    data = {};
    type: string;

    constructor(
        public navCtrl: NavController,
        private service: ForgetPasswordService,
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
    onSend(params): void {
        this.toastCtrl.presentToast('onSend:' + JSON.stringify(params));
    }
}
