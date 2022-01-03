import { Component, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'cs-alert-layout-3',
  templateUrl: 'alert-layout-3.page.html',
  styleUrls: ['alert-layout-3.page.scss'],
})
export class AlertLayout3Page implements OnChanges {
  @Input() data: any;

  @Output() onOkClick = new EventEmitter();
  @Output() onCancelClick = new EventEmitter();
  @Output() onComment = new EventEmitter();
  @Output() onLike = new EventEmitter();

  constructor(private alertCtrl: AlertController) { }

  ngOnChanges(changes: { [propKey: string]: any }) {
    this.data = changes['data'].currentValue;
  }

  onCommentFunc(item): void {
    if (event) {
      event.stopPropagation();
    }
    this.onComment.emit(item);
  }

  onLikeFunc(item): void {
    if (event) {
      event.stopPropagation();
    }
    this.onLike.emit(item);
  }

  async presentAlert(item) {
    if (event) {
      event.stopPropagation();
    }
    const alert = await this.alertCtrl.create(
      {
        header: 'DIALOG SUBSCRIBE',
        subHeader: 'Subscribe for more!',
        inputs: [
          {
            name: 'Email',
            placeholder: 'Email'
          },
        ],
        cssClass: 'alert-subscribe',
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
            handler: (data) => {
              this.onOkClick.emit({ 'item': item, 'email': data.Email });
            }
          }
        ]
      });

    await alert.present();
  }
}
