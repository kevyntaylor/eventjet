import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { NavigationExtras } from '@angular/router';
import { ImageGalleryService } from './../../services/image-gallery-service';

@Component({
    templateUrl: 'item-details-image-subgallery.page.html',
    styleUrls: ['item-details-image-subgallery.page.scss'],
    providers: [ImageGalleryService]
})
export class ItemDetailsImageSubGalleryPage {

    data = {};
    type: string;

    constructor(
        public navCtrl: NavController,
        private route: ActivatedRoute) {
            let self = this;
            this.data = this.route.snapshot.paramMap.get('data');
            this.route.queryParams.subscribe(params => {
                self.data = JSON.parse(params['data']);
            });
    }

    // events
    onItemClick(params): void {
        var dataItem:any = { 'items': this.data['items'], index: params.index }
        const navigationExtras: NavigationExtras = {
            queryParams: { data: JSON.stringify(dataItem) }
        };
        this.navCtrl.navigateForward(['full-image-gallery'], navigationExtras);
    }

    onFavorite(params): void {
        
    }
}
