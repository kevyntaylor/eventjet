import { Component, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'cs-alert-layout-2',
  templateUrl: 'alert-layout-2.page.html',
  styleUrls: ['alert-layout-2.page.scss'],
})
export class AlertLayout2Page implements OnChanges {
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
        header: 'DIALOG WARNING',
        message: 'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.',
        subHeader: item.title,
        cssClass: 'alert-warning',
        buttons: [
          {
            text: 'Ok',
            handler: () => {
              console.log('Ok clicked');
            }
          }
        ]
      });

    await alert.present();
  }
}
