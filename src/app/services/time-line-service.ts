import { IService } from './IService';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';
import { ToastService } from './toast-service';
import { LoadingService } from './loading-service';

@Injectable({ providedIn: 'root' })
export class TimeLineService implements IService {

  constructor(public af: AngularFireDatabase, private loadingService: LoadingService) { }

  getId = (): string => 'timeline';

  getTitle = (): string => 'Time Line';

  getAllThemes = (): Array<any> => {
    return [
      { 'url': 'timeline/0', 'title': 'Timeline With Cards', 'theme': 'layout1' },
      { 'url': 'timeline/1', 'title': 'Timeline With Avatar', 'theme': 'layout2' },
      { 'url': 'timeline/2', 'title': 'Timeline With Comments', 'theme': 'layout3' },
    ];
  }

  getDataForTheme = (menuItem: any): any => {
    return this[
      'getDataFor' +
      menuItem.theme.charAt(0).toUpperCase() +
      menuItem.theme.slice(1)
    ]();
  }

  //* Data Set for page 2
  getDataForLayout1 = (): any => {
    return {
      'toolbarTitle': 'Timeline With Cards',
      "items": [
        {
          "id": 1,
          "title": "Easy to do. Big results.",
          "time": "TODAY AT 3:20PM",
          "image": "assets/imgs/background/14.jpg"
        },
        {
          "id": 2,
          "title": "Revoutionary Design",
          "time": "TODAY AT 2:32PM",
          "image": "assets/imgs/background/13.jpg"
        },
        {
          "id": 3,
          "title": "Bluetooth Smart Watch Phone",
          "time": "TODAY AT 17:25PM",
          "image": "assets/imgs/background/3.jpg"
        },
        {
          "id": 4,
          "title": "Designed for the way you create",
          "time": "TODAY AT 15:15PM",
          "image": "assets/imgs/background/4.jpg"
        }
      ]
    };
  }

  //* Data Set for page 2
  getDataForLayout2 = (): any => {
    return {
      'toolbarTitle': 'Timeline With Avatar',
      "items": [
        {
          "id": 1,
          "title": "iPhone 8 Plus",
          "time": "TODAY AT 2:20PM",
          "avatar": "assets/imgs/avatar/1.jpg",
          "price": "$ 3.23"
        },
        {
          "id": 2,
          "title": "Watch black",
          "time": "TODAY AT 1:30PM",
          "avatar": "assets/imgs/avatar/3.jpg",
          "price": "$ 3.23"
        },
        {
          "id": 3,
          "title": "Canon Photoaparat",
          "time": "TODAY AT 14:20PM",
          "avatar": "assets/imgs/avatar/4.jpg",
          "price": "$ 3.23"
        },
        {
          "id": 4,
          "title": "Nikon Photoaparat",
          "time": "TODAY AT 15:15PM",
          "avatar": "assets/imgs/avatar/0.jpg",
          "price": "$ 3.23"
        },
        {
          "id": 5,
          "title": "Objective",
          "time": "TODAY AT 15:15PM",
          "avatar": "assets/imgs/avatar/6.jpg",
          "price": "$ 3.23"
        },
        {
          "id": 6,
          "title": "50mm",
          "time": "TODAY AT 18:15PM",
          "avatar": "assets/imgs/avatar/5.jpg",
          "price": "$ 3.23"
        },
        {
          "id": 7,
          "title": "Watch black",
          "time": "TODAY AT 19:55PM",
          "avatar": "assets/imgs/avatar/8.jpg",
          "price": "$ 3.23"
        }
      ]
    };
  }

  //* Data Set for page 3
  getDataForLayout3 = (): any => {
    return {
      'toolbarTitle': 'Timeline With Comments',
      "items": [
        {
          "id": 1,
          "time": "TODAY AT 2:20PM",
          "avatar": "assets/imgs/avatar/10.jpg",
          "title": "Alice Ellis",
          "subtitle": "@alice",
          "description": "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks."
        },
        {
          "id": 2,
          "time": "TODAY AT 1:30PM",
          "avatar": "assets/imgs/avatar/11.jpg",
          "title": "Natasha Cox",
          "subtitle": "@natasha",
          "description": "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia."
        },
        {
          "id": 3,
          "time": "TODAY AT 14:20PM",
          "avatar": "assets/imgs/avatar/12.jpg",
          "title": "Caroline Wright",
          "subtitle": "@caroline",
          "description": "It is a long established fact that a reader will be distracted by the readable."
        },
        {
          "id": 4,
          "time": "TODAY AT 14:20PM",
          "avatar": "assets/imgs/avatar/13.jpg",
          "title": "Cameron Rogers",
          "subtitle": "@cameron",
          "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        }
      ]
    };
  }

  load(item: any): Observable<any> {
    this.loadingService.show();
    if (AppSettings.IS_FIREBASE_ENABLED) {
      return new Observable(observer => {
        this.af
          .object('timeline/' + item.theme)
          .valueChanges()
          .subscribe(snapshot => {
            this.loadingService.hide();
            observer.next(snapshot);
            observer.complete();
          }, err => {
            this.loadingService.hide();
            observer.error([]);
            observer.complete();
          });
      });
    } else {
      return new Observable(observer => {
        this.loadingService.hide();
        observer.next(this.getDataForTheme(item));
        observer.complete();
      });
    }
  }
}
