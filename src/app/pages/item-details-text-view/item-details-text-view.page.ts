import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TextViewService } from '../../services/text-view-service';

@Component({
  templateUrl: 'item-details-text-view.page.html',
  styleUrls: ['./item-details-text-view.page.scss'],
  providers: [TextViewService]
})
export class ItemDetailsPageTextView {

  params: any = {};

  constructor(public navCtrl: NavController, private textViewService: TextViewService) {
    // If we navigated to this page, we will have an item available as a nav param
    this.params = this.textViewService.prepareParams(navCtrl);
  }
}
