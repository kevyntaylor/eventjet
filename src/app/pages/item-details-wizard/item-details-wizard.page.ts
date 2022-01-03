import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

import { WizardService } from './../../services/wizard-service';
import { ToastService } from 'src/app/services/toast-service';

@Component({
    templateUrl: 'item-details-wizard.page.html',
    styleUrls: ['item-details-wizard.page.scss'],
    providers: [WizardService]
})
export class ItemDetailsWizardPage {

    data = {};
    type: string;

    constructor(
        public navCtrl: NavController,
        private service: WizardService,
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
    onFinish(): void {
        this.toastCtrl.presentToast('onFinish');
    }

    onPrevious(): void {
        
    }

    onNext(): void {

    }
}
