import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

import { LoginService } from '../../services/login-service';
import { ToastService } from 'src/app/services/toast-service';

@Component({
    templateUrl: 'item-details-login.page.html',
    styleUrls: ['item-details-login.page.scss'],
    providers: [LoginService]

})
export class ItemDetailsLoginPage {

    data = {};
    type: string;

    constructor(
        public navCtrl: NavController,
        private service: LoginService,
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
    onLogin(params): void {
        this.toastCtrl.presentToast('onLogin:' + JSON.stringify(params));
    }
    onRegister(params): void {
        this.toastCtrl.presentToast('onRegister:' + JSON.stringify(params));
    }
    onSkip(): void {
        this.toastCtrl.presentToast('onSkip');
    }
    onFacebook(params): void {
        this.toastCtrl.presentToast('onFacebook:' + JSON.stringify(params));
    }
    onTwitter(params): void {
        this.toastCtrl.presentToast('onTwitter:' + JSON.stringify(params));
    }
    onGoogle(params): void {
        this.toastCtrl.presentToast('onGoogle:' + JSON.stringify(params));
    }
    onPinterest(params): void {
        this.toastCtrl.presentToast('onPinterest:' + JSON.stringify(params));
    }
}
