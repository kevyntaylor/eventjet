import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

import { CheckBoxService } from './../../services/check-box-service';
import { ToastService } from 'src/app/services/toast-service';

@Component({
    templateUrl: 'item-details-check-box.page.html',
    styleUrls: ['item-details-check-box.page.scss'],
    providers: [CheckBoxService]
})
export class ItemDetailsCheckBoxPage {

    data = {};
    type: string;

    constructor(
        public navCtrl: NavController,
        private service: CheckBoxService,
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
    onItemClick(params): void {
        this.toastCtrl.presentToast('onItemClick:' + JSON.stringify(params));
    }
}
