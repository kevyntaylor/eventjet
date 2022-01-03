import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

import { AlertService } from './../../services/alert-service';
import { ToastService } from 'src/app/services/toast-service';

@Component({
    templateUrl: 'item-details-alert.page.html',
    styleUrls: ['item-details-alert.page.scss'],
    providers: [AlertService]
})
export class ItemDetailsAlertPage {

    data = {};
    type: string;

    constructor(
        public navCtrl: NavController,
        private service: AlertService,
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
    onCancelClick(params): void {
        this.toastCtrl.presentToast('onCancelClick');
    }

    onOkClick(params): void {
        this.toastCtrl.presentToast('onOkClick:' + JSON.stringify(params));
    }
}
