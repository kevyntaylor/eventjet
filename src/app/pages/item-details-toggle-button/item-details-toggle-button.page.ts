import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

import { ToggleService } from './../../services/toggle-service';
import { ToastService } from 'src/app/services/toast-service';

@Component({
    templateUrl: 'item-details-toggle-button.page.html',
    styleUrls: ['item-details-toggle-button.page.scss'],
    providers: [ToggleService]
})
export class ItemDetailsToggleButtonPage {

    data = {};
    type: string;

    constructor(
        public navCtrl: NavController,
        private service: ToggleService,
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
