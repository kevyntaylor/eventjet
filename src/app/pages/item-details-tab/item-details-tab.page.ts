import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

import { TabsService } from './../../services/tabs-service';
import { ToastService } from 'src/app/services/toast-service';

@Component({
    templateUrl: 'item-details-tab.page.html',
    styleUrls: ['item-details-tab.page.scss'],
    providers: [TabsService]
})
export class ItemDetailsTabPage {

    data = {};
    type: string;

    constructor(
        public navCtrl: NavController,
        private service: TabsService,
        private toastCtrl: ToastService,
        private route: ActivatedRoute) {
        // this.type = this.route.snapshot.paramMap.get('type');
        // this.service.load(service.getAllThemes()[this.type]).subscribe(d => {
        //     this.data = d;
        // });
    }

    isType(item) {
        return item === parseInt(this.type, 10);
    }
}
