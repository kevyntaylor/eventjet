import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

import { RegisterService } from '../../services/register-service';
import { ToastService } from 'src/app/services/toast-service';

@Component({
    templateUrl: 'item-details-register.page.html',
    styleUrls: ['item-details-register.page.scss'],
    providers: [RegisterService]

})
export class ItemDetailsRegisterPage {

    data = {};
    type: string;

    constructor(
        public navCtrl: NavController,
        private service: RegisterService,
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
    onRegister(params): void {
        this.toastCtrl.presentToast('onRegister:' + JSON.stringify(params));
    }
    onSkip(): void {
        this.toastCtrl.presentToast('onSkip');
    }
}
