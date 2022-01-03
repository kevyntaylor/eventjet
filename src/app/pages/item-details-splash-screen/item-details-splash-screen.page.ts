import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

import { SplashScreenService } from './../../services/splash-screen-service';
import { ToastService } from 'src/app/services/toast-service';

@Component({
    templateUrl: 'item-details-splash-screen.page.html',
    styleUrls: ['item-details-splash-screen.page.scss'],
    providers: [SplashScreenService]
})
export class ItemDetailsSplashScreenPage {

    data = {};
    type: string;

    constructor(
        public navCtrl: NavController,
        private service: SplashScreenService,
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
    onRedirect(): void {
        this.navCtrl.back();
    }
}
