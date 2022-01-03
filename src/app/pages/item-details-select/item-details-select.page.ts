
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

import { SelectService } from './../../services/select-service';
import { ToastService } from 'src/app/services/toast-service';

@Component({
    templateUrl: 'item-details-select.page.html',
    styleUrls: ['item-details-select.page.scss'],
    providers: [SelectService]
})
export class ItemDetailsSelectPage {

    dataLayout1 = {};
    dataLayout2 = {};
    dataLayout3 = {};
    dataLayout4 = {};
    dataLayout5 = {};
    dataLayout6 = {};
    headerTitle = {}

    type: string;

    constructor(
        public navCtrl: NavController,
        private service: SelectService,
        private toastCtrl: ToastService,
        private route: ActivatedRoute) {
        this.type = this.route.snapshot.paramMap.get('type');
        this.service.load(service.getAllThemes()[this.type]).subscribe(d => {
            this.dataLayout1 = d.layout1;
            this.dataLayout2 = d.layout2;
            this.dataLayout3 = d.layout3;
            this.dataLayout4 = d.layout4;
            this.dataLayout5 = d.layout5;
            this.dataLayout6 = d.layout6;
            if (this.isType(0)){
                this.headerTitle = d.layout1.headerTitle
            } else {
                this.headerTitle = d.layout4.headerTitle
            }
        });
    }

    isType(item) {
        return item === parseInt(this.type, 10);
    }
    // events
    onChangeYears(params): void {
        this.toastCtrl.presentToast('onChangeYears:' + JSON.stringify(params));
    }
    onChangeMonth(params): void {
        this.toastCtrl.presentToast('onChangeMonth:' + JSON.stringify(params));
    }
    onChange(params): void {
        this.toastCtrl.presentToast('onChange:' + JSON.stringify(params));
    }
}
