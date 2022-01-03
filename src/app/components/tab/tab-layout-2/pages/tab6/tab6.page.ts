import { Component, OnChanges } from '@angular/core';
import { ToastService } from './../../../../../services/toast-service';
import { TabsService } from './../../../../../services/tabs-service';

@Component({
  selector: 'app-tab6',
  templateUrl: 'tab6.page.html',
  styleUrls: ['tab6.page.scss'],
  providers: [TabsService]
})
export class Tab6Page implements OnChanges {

  data = {};
  item = {
    'name': '',
    'title': '',
    'description': ''
  };


  constructor(private service: TabsService, private toastCtrl: ToastService,) {
    this.service.load('tab6').subscribe(d => {
      this.data = d;
    });
  }

  ngOnChanges(changes: { [propKey: string]: any }) {
    this.data = changes['data'].currentValue;
  }

  onSubmitFunc() {
    if (event) {
      event.stopPropagation();
    }
    this.toastCtrl.presentToast('Send:' + JSON.stringify(this.item));
    this.resetValue();
  }

  resetValue() {
    this.item.name = '';
    this.item.title = '';
    this.item.description = '';
  }
}
