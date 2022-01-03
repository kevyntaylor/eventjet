import { IService } from './IService';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';
import { ToastService } from './toast-service';
import { LoadingService } from './loading-service';

@Injectable({ providedIn: 'root' })
export class ListViewDragAndDropService implements IService {

  constructor(public af: AngularFireDatabase, private loadingService: LoadingService, private toastCtrl: ToastService) { }

  getId = (): string => 'dragAndDrop';

  getTitle = (): string => 'Drag and Drop';

  getAllThemes = (): Array<any> => {
    return [
      { 'url': 'drag-and-drop/0', 'title': 'Small item + header', 'theme': 'layout1' },
      { 'url': 'drag-and-drop/1', 'title': 'Products + CTA header', 'theme': 'layout2' },
      { 'url': 'drag-and-drop/2', 'title': 'Medium item with avatar', 'theme': 'layout3' }
    ];
  }

  getDataForTheme = (menuItem: any): Array<any> => {
    return this[
      'getDataFor' +
      menuItem.theme.charAt(0).toUpperCase() +
      menuItem.theme.slice(1)
    ]();
  }

  //* Data Set for page 1
  getDataForLayout1 = (): any => {
    return {
      'toolbarTitle': 'Small Item + Header',
      "header": "Restaurants",
      "items": [
        {
          "id": 1,
          "title": "Rainforest Cafe",
          "subtitle": "New York City",
          "description": "7186 km"
        },
        {
          "id": 2,
          "title": "Big Boy",
          "subtitle": "Los Angeles",
          "description": "2281 km"
        },
        {
          "id": 3,
          "title": "California Pizza Kitchen",
          "subtitle": "Beijing",
          "description": "1748 km"
        },
        {
          "id": 4,
          "title": "Cheese Burger in Paradise",
          "subtitle": "Delhi",
          "description": "3450 km"
        },
        {
          "id": 5,
          "title": "T.G.I. Friday's",
          "subtitle": "Shanghai",
          "description": "7374 km"
        },
        {
          "id": 6,
          "title": "Heart Attack Grill",
          "subtitle": "Paris",
          "description": "6070 km"
        },
        {
          "id": 7,
          "title": "Heart Attack Grill",
          "subtitle": "Istanbul",
          "description": "8158 km"
        },
        {
          "id": 8,
          "title": "Dick's Last Resort",
          "subtitle": "Tokyo",
          "description": "292 km"
        },
        {
          "id": 9,
          "title": "Steak 'n Shake",
          "subtitle": "Guangzhou",
          "description": "9231 km"
        },
        {
          "id": 10,
          "title": "Bluepoint Sage Cafe",
          "subtitle": "Mumbai",
          "description": "9972 km"
        },
        {
          "id": 11,
          "title": "Ground Round",
          "subtitle": "Moscow",
          "description": "9720 km"
        },
        {
          "id": 12,
          "title": "Waffle House",
          "subtitle": "São Paulo",
          "description": "988 km"
        },
        {
          "id": 13,
          "title": "Quaker Steak & Lube",
          "subtitle": "Shenzhen",
          "description": "1000 km"
        },
        {
          "id": 14,
          "title": "Boston Pizza",
          "subtitle": "Boston",
          "description": "2565 km"
        }
      ]
    };
  }

  //* Data Set for page 2
  getDataForLayout2 = (): any => {
    return {
      'toolbarTitle': 'Product + Cta Header',
      "title": "Make order now!",
      "subtitle": "Reorder list by your wish.",
      "button": "Confirm",
      "items": [
        {
          "id": 1,
          "title": "Keyboard",
          "subtitle": "20% Off",
          "image": "assets/imgs/avatar/2.jpg",
          "icon": "icon icon-wallet-travel",
          "price": "$199.99"
        },
        {
          "id": 2,
          "title": "Headphones",
          "subtitle": "15% Off",
          "image": "assets/imgs/avatar/3.jpg",
          "icon": "icon icon-wallet-travel",
          "price": "$295.99"
        },
        {
          "id": 3,
          "title": "Watch",
          "subtitle": "22% Off",
          "image": "assets/imgs/avatar/6.jpg",
          "icon": "icon icon-wallet-travel",
          "price": "$1032.99"
        },
        {
          "id": 4,
          "title": "Dualshock controller",
          "subtitle": "10% Off",
          "image": "assets/imgs/avatar/0.jpg",
          "icon": "icon icon-wallet-travel",
          "price": "$1269.99"
        },
        {
          "id": 5,
          "title": "Canon Photoaparat",
          "subtitle": "12% Off",
          "image": "assets/imgs/avatar/5.jpg",
          "icon": "icon icon-wallet-travel",
          "price": "$34.99"
        },
        {
          "id": 6,
          "title": "Objective",
          "subtitle": "14% Off",
          "image": "assets/imgs/avatar/7.jpg",
          "icon": "icon icon-wallet-travel",
          "price": "$499.99"
        },
      ]
    };
  }

  //* Data Set for page 3
  getDataForLayout3 = (): any => {
    return {
      'toolbarTitle': 'Medium Item With Avatar',
      "header": "List friends",
      "items": [
        {
          "id": 1,
          "title": "Erica Romaguera",
          "subtitle": "@erica",
          "image": "assets/imgs/avatar/13.jpg"
        },
        {
          "id": 2,
          "title": "Nia Gutkowski",
          "subtitle": "@nia234",
          "image": "assets/imgs/avatar/14.jpg"
        },
        {
          "id": 3,
          "title": "Camila Hintz",
          "subtitle": "@camila",
          "image": "assets/imgs/avatar/15.jpg"
        },
        {
          "id": 4,
          "title": "Anna Yost",
          "subtitle": "@anna",
          "image": "assets/imgs/avatar/16.jpg"
        },
        {
          "id": 5,
          "title": "Georgianna Baumbach",
          "subtitle": "@georgianna",
          "image": "assets/imgs/avatar/17.jpg"
        },
        {
          "id": 6,
          "title": "Jaqueline Stehr",
          "subtitle": "@jaqueline",
          "image": "assets/imgs/avatar/18.jpg"
        },
        {
          "id": 7,
          "title": "Naomi Mante",
          "subtitle": "@naomi",
          "image": "assets/imgs/avatar/19.jpg"
        },
        {
          "id": 8,
          "title": "Amaya Abshire",
          "subtitle": "@amaya",
          "image": "assets/imgs/avatar/20.jpg"
        },
        {
          "id": 9,
          "title": "Rickie Glover",
          "subtitle": "@rickie",
          "image": "assets/imgs/avatar/21.jpg"
        },
        {
          "id": 10,
          "title": "Antone Mayert",
          "subtitle": "@antone",
          "image": "assets/imgs/avatar/22.jpg"
        },
        {
          "id": 11,
          "title": "Alison Streich",
          "subtitle": "@alison",
          "image": "assets/imgs/avatar/23.jpg"
        }
      ]
    };
  }

  load(item: any): Observable<any> {
    const that = this;
    that.loadingService.show();
    if (AppSettings.IS_FIREBASE_ENABLED) {
      return new Observable(observer => {
        this.af
          .object('listView/dragAndDrop/' + item.theme)
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
        observer.next(this.getDataForTheme(item));
        observer.complete();
      });
    }
  }
}
