import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { NavigationExtras } from '@angular/router';
import { ImageGalleryService } from './../../services/image-gallery-service';
import { TouchSequence } from 'selenium-webdriver';

@Component({
    templateUrl: 'item-details-image-gallery.page.html',
    styleUrls: ['item-details-image-gallery.page.scss'],
    providers: [ImageGalleryService]
})
export class ItemDetailsImageGalleryPage {

    data = {};
    type: string;
    toolbarTitle:String;

    constructor(
        public navCtrl: NavController,
        private service: ImageGalleryService,
        private route: ActivatedRoute) {
        this.type = this.route.snapshot.paramMap.get('type');
        this.service.load(service.getAllThemes()[this.type]).subscribe(d => {
            this.data = d;
            this.toolbarTitle = d.toolbarTitle;
        });
    }

    isType(item) {
        return item === parseInt(this.type, 10);
    }

    // events
    onItemClick(params): void {
        let index = params.index;
        params = params.item;
        var dataItem: any = {};
        if (this.isType(1)) {
            if (!params.hasOwnProperty('items')) {
                dataItem = { 'items': this.data['items'], 'index': index }
            }
        } else {
            dataItem = params;
            if (!params.hasOwnProperty('items')) {
                dataItem = { 'items': params }
            }
        }

        const navigationExtras: NavigationExtras = {
            queryParams: { data: JSON.stringify(dataItem) }
        };

        if (this.isType(1)) {
            this.navCtrl.navigateForward(['full-image-gallery'], navigationExtras);
        } else {
            this.navCtrl.navigateForward(['image-gallery-subgallery'], navigationExtras);
        }
    }

    onFavorite(params): void {
        params.favorite = !params.favorite;
    }
}
