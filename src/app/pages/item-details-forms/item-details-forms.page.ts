
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

import { FormService } from './../../services/form-service';
import { ToastService } from 'src/app/services/toast-service';

@Component({
    templateUrl: 'item-details-forms.page.html',
    styleUrls: ['item-details-forms.page.scss'],
    providers: [FormService]

})
export class ItemDetailsFormsPage {

    data = {};
    type: string;

    constructor(
        public navCtrl: NavController,
        private service: FormService,
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
    onSubmit(params): void {
        this.toastCtrl.presentToast('onSubmit:' + JSON.stringify(params));
    }

    onRates(params): void {
        this.toastCtrl.presentToast('onRates:' + JSON.stringify(params));
    }

    onAddImage(params): void {
        this.toastCtrl.presentToast('onRates:' + JSON.stringify(params));
    }
}
