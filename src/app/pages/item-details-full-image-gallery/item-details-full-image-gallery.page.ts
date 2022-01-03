import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: 'item-details-full-image-gallery.page.html',
    styleUrls: ['item-details-full-image-gallery.page.scss']
})
export class ItemDetailsFullImageGalleryPage {

    data = {};

    constructor(
        public navCtrl: NavController,
        private route: ActivatedRoute) {
            let self = this;
            this.data = this.route.snapshot.paramMap.get('data');
            this.route.queryParams.subscribe(params => {
                self.data = JSON.parse(params['data']);
            });
    }
}
