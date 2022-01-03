
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

import { SpinnerService } from './../../services/spinner-service';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: 'item-details-spinner.page.html',
    styleUrls: ['item-details-spinner.page.scss'],
    providers: [SpinnerService]
})
export class ItemDetailsSpinnerPage {

    data = {};
    slideOpts = { 'effect': 'flip' };
    type: string;

    constructor(public navCtrl: NavController, private service: SpinnerService, private route: ActivatedRoute) {
        this.type = this.route.snapshot.paramMap.get('type');
        this.service.load(service.getAllThemes()[this.type]).subscribe(d => {
            this.data = d;
        });
    }

    isType(item) {
        return item === parseInt(this.type, 10);
    }
}
