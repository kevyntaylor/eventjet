import { Component, OnChanges } from '@angular/core';
import { TabsService } from './../../../../../services/tabs-service';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-tab7',
  templateUrl: 'tab7.page.html',
  styleUrls: ['tab7.page.scss'],
  providers: [TabsService]
})
export class Tab7Page implements OnChanges {

  data = {}

  constructor(private service: TabsService, public actionSheetCtrl: ActionSheetController) {
    this.service.load('tab7').subscribe(d => {
      this.data = d;
    });
  }

  ngOnChanges(changes: { [propKey: string]: any }) {
    this.data = changes['data'].currentValue;
  }

  async presentActionSheet(item) {
    if (event) {
      event.stopPropagation();
    }
    if (this.data['actionSheet']) {
      const actionSheet = await this.actionSheetCtrl.create(this.data['actionSheet']);
      this.data['actionSheet']['buttons'].forEach(element => {
        element['handler'] = function () {
          this.onItemClickActionSheet.emit({ 'button': element, 'item': item });
        };
      });
      await actionSheet.present();
    }
  }
}
