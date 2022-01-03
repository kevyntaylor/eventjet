import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

import { ListViewGoogleCardsService } from './../../services/list-view-google-card-service';
import { ToastService } from 'src/app/services/toast-service';

@Component({
    templateUrl: 'item-details-google-card.page.html',
    styleUrls: ['item-details-google-card.page.scss'],
    providers: [ListViewGoogleCardsService]
})
export class ItemDetailsGoogleCardPage {

    data = {};
    type: string;

    constructor(
        public navCtrl: NavController,
        private service: ListViewGoogleCardsService,
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
        this.toastCtrl.presentToast('onItemClick');
    }
    onFab(params): void {
        this.toastCtrl.presentToast('onFab');
    }
    onShare(params): void {
        this.toastCtrl.presentToast(' onShare');
    }
    onExplore(params): void {
        this.toastCtrl.presentToast('onExplore');
    }
    onFavorite(params): void {
        this.toastCtrl.presentToast('onFavorite');
    }
    onLike(params): void {
        this.toastCtrl.presentToast('onLike');
    }
}
