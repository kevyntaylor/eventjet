import { Component, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'cs-alert-layout-1',
  templateUrl: 'alert-layout-1.page.html',
  styleUrls: ['alert-layout-1.page.scss'],
})
export class AlertLayout1Page implements OnChanges {
  @Input() data: any;

  @Output() onOkClick = new EventEmitter();
  @Output() onCancelClick = new EventEmitter();

  constructor(private alertCtrl: AlertController) { }

  ngOnChanges(changes: { [propKey: string]: any }) {
    this.data = changes['data'].currentValue;
  }

  async presentAlert(item) {
    if (event) {
      event.stopPropagation();
    }
    const alert = await this.alertCtrl.create({
      header: 'DIALOG INFO',
      message: 'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.',
      subHeader: item.title,
      cssClass: 'info-dialog',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.onCancelClick.emit(item);
          }
        },
        {
          text: 'Ok',
          handler: () => {
            this.onOkClick.emit(item);
          }
        }
      ]
    });

    await alert.present();
  }
}
