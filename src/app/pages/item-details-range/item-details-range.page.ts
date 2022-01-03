import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

import { RangeService } from './../../services/range-service';
import { ToastService } from 'src/app/services/toast-service';

@Component({
    templateUrl: 'item-details-range.page.html',
    styleUrls: ['item-details-range.page.scss'],
    providers: [RangeService]

})
export class ItemDetailsRangePage {

    dataLayout1 = {};
    dataLayout2 = {};
    dataLayout3 = {};
    dataLayout4 = {};
    type: string;
    headerTitle: string;

    constructor(
        public navCtrl: NavController,
        private service: RangeService,
        private toastCtrl: ToastService,
        private route: ActivatedRoute) {
        this.type = this.route.snapshot.paramMap.get('type');
        this.service.load(service.getAllThemes()[this.type]).subscribe(d => {
            this.dataLayout1 = d.layout1;
            this.dataLayout2 = d.layout2;
            this.dataLayout3 = d.layout3;
            this.dataLayout4 = d.layout4;
            this.headerTitle= d.toolbarTitle
        });
    }

    isType(item) {
        return item === parseInt(this.type, 10);
    }

    // events
    onChange(params): void {
    }
}
