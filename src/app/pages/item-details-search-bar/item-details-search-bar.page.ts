import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

import { SearchBarService } from './../../services/search-bar-service';
import { ToastService } from 'src/app/services/toast-service';

@Component({
    templateUrl: 'item-details-search-bar.page.html',
    styleUrls: ['item-details-search-bar.page.scss'],
    providers: [SearchBarService]
})
export class ItemDetailsSearchBarPage {

    data = {};
    type: string;

    constructor(
        public navCtrl: NavController,
        private service: SearchBarService,
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

    onTextChange(text): void {
        this.toastCtrl.presentToast('onTextChange:' + text);
    }
}
