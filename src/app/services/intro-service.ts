import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';
import { LoadingService } from './loading-service';

@Injectable({ providedIn: 'root' })
export class IntroService {

  constructor(public af: AngularFireDatabase, private loadingService: LoadingService) { }

  // Set data for - WIZARD MAIN
  getData = (): any => {
    return {
      "backgroundImage": "assets/imgs/background/39.jpg",
      "btnPrev": "Previous",
      "btnNext": "Next",
      "btnFinish": "Finish",
      "items": [
        {
          "avatarImage": "assets/imgs/background/28.jpg",
          "logo": "assets/imgs/logo/2.png",
          "title": "Aenean feugiat ipsum eget porttitor auctor",
          "description": "Duis gravida, tellus eget condimentum vestibulum, massa metus gravida mauris, elementum sodales nunc tellus ut ligula"
        },
        {
          "avatarImage": "assets/imgs/background/29.jpg",
          "logo": "assets/imgs/logo/2.png",
          "title": "Sed sollicitudin tortor id bibendum sollicitudin",
          "description": "Donec tincidunt odio eget ante bibendum, eget dapibus mauris hendrerit"
        },
        {
          "avatarImage": "assets/imgs/background/30.jpg",
          "logo": "assets/imgs/logo/2.png",
          "title": "In ac tortor in risus commodo molestie",
          "description": "Ut iaculis scelerisque mauris sit amet interdum"
        }
      ]
    };
  }

  load(): Observable<any> {
    const that = this;
    that.loadingService.show();
    if (AppSettings.IS_FIREBASE_ENABLED) {
      return new Observable(observer => {
        this.af
          .object('intro')
          .valueChanges()
          .subscribe(snapshot => {
            that.loadingService.hide();
            observer.next(snapshot);
            observer.complete();
          }, err => {
            that.loadingService.hide();
            observer.error([]);
            observer.complete();
          });
      });
    } else {
      return new Observable(observer => {
        that.loadingService.hide();
        observer.next(this.getData());
        observer.complete();
      });
    }
  }
}
