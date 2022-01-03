import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

import { ProfileService } from './../../services/profile-service';
import { ToastService } from 'src/app/services/toast-service';

@Component({
  templateUrl: 'item-details-profile.page.html',
  styleUrls: ['item-details-profile.page.scss'],
  providers: [ProfileService]

})
export class ItemDetailsProfilePage {

  data = {};
  type: string;

  constructor(
    public navCtrl: NavController,
    private service: ProfileService,
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


  onFacebook(params) {
    this.toastCtrl.presentToast('onFacebookFunc:' + JSON.stringify(params));
  }

  onTwitter(params) {
    this.toastCtrl.presentToast('onTwitterFunc:' + JSON.stringify(params));
  }

  onInstagram(params) {
    this.toastCtrl.presentToast('onInstagramFunc:' + JSON.stringify(params));
  }

  onItemClick(params) {
    this.toastCtrl.presentToast('onItemClick:' + JSON.stringify(params));
  }

  onLike(item): void {
    if (item && item.like) {
      if (item.like.isActive) {
        item.like.isActive = false;
        if (item.like.number) {
          item.like.number--;
        }
      } else {
        item.like.isActive = true;
        if (item.like.number) {
          item.like.number++;
        }
      }
    }
    this.toastCtrl.presentToast('onLike:' + JSON.stringify(item));
  }

  onComment(item): void {
    this.toastCtrl.presentToast('onComment:' + JSON.stringify(item));
  }
}
