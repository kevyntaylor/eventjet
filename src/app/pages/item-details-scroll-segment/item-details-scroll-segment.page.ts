import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

import { ScrollSegmentService } from '../../services/scroll-segment-service';
import { ToastService } from 'src/app/services/toast-service';

@Component({
  templateUrl: 'item-details-scroll-segment.page.html',
  styleUrls: ['item-details-scroll-segment.page.scss'],
  providers: [ScrollSegmentService]

})
export class ItemDetailsScrollSegmentPage {

  data = {};
  type: string;

  constructor(
    public navCtrl: NavController,
    private service: ScrollSegmentService,
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

  onItemClick(params) {
    this.toastCtrl.presentToast('onItemClick:' + JSON.stringify(params));
  }

  onFollowClick(params) {
    this.toastCtrl.presentToast('onFollowClick');
  }

  onMessageClick(params) {
    this.toastCtrl.presentToast('onMessageClick');
  }
}
