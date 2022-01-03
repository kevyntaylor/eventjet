
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

import { MapsService } from './../../services/maps-service';
import { ToastService } from 'src/app/services/toast-service';

@Component({
    templateUrl: 'item-details-map.page.html',
    styleUrls: ['item-details-map.page.scss'],
    providers: [MapsService]

})
export class ItemDetailsMapPage {

    data = {};
    type: string;

    constructor(
        public navCtrl: NavController,
        private service: MapsService,
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
    onLike(params) {
        this.toastCtrl.presentToast('onLike:' + JSON.stringify(params));
    }

    onFavorite(params) {
        this.toastCtrl.presentToast('onFavorite:' + JSON.stringify(params));
    }

    onShare(params) {
        this.toastCtrl.presentToast('onShare:' + JSON.stringify(params));
    }

    onItemClick(params) {
        this.toastCtrl.presentToast('onItemClick:' + JSON.stringify(params));
    }

    onRates(params) {
        this.toastCtrl.presentToast('onRates:' + JSON.stringify(params));
    }
}
