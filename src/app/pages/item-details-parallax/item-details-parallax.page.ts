import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

import { ParallaxService } from './../../services/parallax-service';
import { ToastService } from 'src/app/services/toast-service';

@Component({
    templateUrl: 'item-details-parallax.page.html',
    styleUrls: ['item-details-parallax.page.scss'],
    providers: [ParallaxService]

})
export class ItemDetailsParallaxPage {

    data = {};
    type: string;

    constructor(
        public navCtrl: NavController,
        private service: ParallaxService,
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
        this.toastCtrl.presentToast('onLike');
    }

    onFavorite(params) {
        this.toastCtrl.presentToast('onFavorite');
    }

    onShare(params) {
        this.toastCtrl.presentToast('onShare');
    }

    onItemClick(params) {
        this.toastCtrl.presentToast('onItemClick:' + JSON.stringify(params));
    }

    onRates(params) {
        this.toastCtrl.presentToast('onRates:' + JSON.stringify(params));
    }

    onFab(params) {
        this.toastCtrl.presentToast('onFab:' + JSON.stringify(params));
    }
}
