import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

import { CommentService } from './../../services/comment-service';
import { ToastService } from 'src/app/services/toast-service';

@Component({
    templateUrl: 'item-details-comment.page.html',
    styleUrls: ['item-details-comment.page.scss'],
    providers: [CommentService]

})
export class ItemDetailsCommentPage {

    data = {};
    type: string;

    constructor(
        public navCtrl: NavController,
        private service: CommentService,
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
        this.toastCtrl.presentToast('onItemClick:' + JSON.stringify(params));
    }
}
