import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

import { NewPasswordService } from '../../services/new-password-services';
import { ToastService } from 'src/app/services/toast-service';

@Component({
    templateUrl: 'item-details-new-password.page.html',
    styleUrls: ['item-details-new-password.page.scss'],
    providers: [NewPasswordService]

})
export class ItemDetailsNewPasswordPage {

    data = {};
    type:string;

    constructor(
        public navCtrl: NavController,
        private service: NewPasswordService,  
        private toastCtrl: ToastService,
        private route: ActivatedRoute) {
            this.type = this.route.snapshot.paramMap.get('type')
            this.service.load(service.getAllThemes()[this.type]).subscribe(d => {
                this.data = d
            })
    }

    isType(item) {
        return item == this.type;
    }

    //events
    onDone(params):void {
        this.toastCtrl.presentToast('onDone:' + JSON.stringify(params));
    }
}
