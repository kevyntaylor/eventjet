import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

import { AnimationService } from './../../services/animation-service';
import { ToastService } from 'src/app/services/toast-service';

@Component({
    templateUrl: 'item-details-animation.page.html',
    styleUrls: ['item-details-animation.page.scss'],
    providers: [AnimationService]
})
export class ItemDetailsAnimationPage {

    data = {
        'toolbarTitle': '',
        'items': null
    };
    type: string;

    constructor(
        public navCtrl: NavController,
        private service: AnimationService,
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
    onComment(params): void {
        this.toastCtrl.presentToast('onComment');
    }
    onProceed(params): void {
        this.toastCtrl.presentToast('onProceed');
    }
}
