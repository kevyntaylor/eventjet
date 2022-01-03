import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

import { ListViewDragAndDropService } from './../../services/list-view-drag-and-drop-service';
import { ToastService } from 'src/app/services/toast-service';

@Component({
    templateUrl: 'item-details-drag-and-drop.page.html',
    styleUrls: ['item-details-drag-and-drop.page.scss'],
    providers: [ListViewDragAndDropService]
})
export class ItemDetailsDragAndDropPage {

    data = {};
    type: string;

    constructor(
        public navCtrl: NavController,
        private service: ListViewDragAndDropService,
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
        this.toastCtrl.presentToast('onItemClick');
    }

    onProceed(params): void {
        this.toastCtrl.presentToast('onProceed');
    }
}
