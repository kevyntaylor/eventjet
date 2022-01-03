
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

import { ListViewSwipeToDismissService } from './../../services/list-view-swipe-to-dismiss-service';
import { ToastService } from 'src/app/services/toast-service';

@Component({
    templateUrl: 'item-details-swipe-to-dismiss.page.html',
    styleUrls: ['item-details-swipe-to-dismiss.page.scss'],
    providers: [ListViewSwipeToDismissService]
})
export class ItemDetailsSwipeToDismissPage {

    data = {};
    type: string;

    constructor(
        public navCtrl: NavController,
        private service: ListViewSwipeToDismissService,
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

    onLike(params): void {
        this.toastCtrl.presentToast('onLike');
    }
    onFavorite(params): void {
        this.toastCtrl.presentToast('onFavorite');
    }
    onShare(params): void {
        this.toastCtrl.presentToast('onShare');
    }
    onUndo(params): void {
        this.toastCtrl.presentToast('onUndo');
    }
    onDelete(params): void {
        this.toastCtrl.presentToast('onDelete');
    }
    
}
