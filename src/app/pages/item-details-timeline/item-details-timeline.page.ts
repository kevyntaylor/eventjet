import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

import { ToastService } from 'src/app/services/toast-service';
import { TimeLineService } from './../../services/time-line-service';

@Component({
    templateUrl: 'item-details-timeline.page.html',
    styleUrls: ['item-details-timeline.page.scss'],
    providers: [TimeLineService]
})
export class ItemDetailsTimeLinePage {

    data = {};
    type: string;

    constructor(
        public navCtrl: NavController,
        private service: TimeLineService,
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
