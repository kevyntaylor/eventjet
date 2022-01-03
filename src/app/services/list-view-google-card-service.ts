import { IService } from './IService';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';
import { ToastService } from './toast-service';
import { LoadingService } from './loading-service';

@Injectable({ providedIn: 'root' })
export class ListViewGoogleCardsService implements IService {

  constructor(public af: AngularFireDatabase, private loadingService: LoadingService, private toastCtrl: ToastService) { }

  getId = (): string => 'googleCards';

  getTitle = (): string => 'Google Cards';

  getAllThemes = (): Array<any> => {
    return [
      { 'url': 'google-card/0', 'title': 'Styled cards', 'theme': 'layout1' },
      { 'url': 'google-card/1', 'title': 'Styled cards 2', 'theme': 'layout2' },
      { 'url': 'google-card/2', 'title': 'Full image cards', 'theme': 'layout3' },
      { 'url': 'google-card/3', 'title': 'News card', 'theme': 'layout4' }
    ];
  }

  //* Data Set for page 1
  getDataForLayout1 = (): any => {
    return {
      'toolbarTitle': 'Styled cards',
      "items": [
        {
          "id": 1,
          "title": "Avenue Fouquet",
          "description": "Last year, reformist-backed candidates supported by Khatami enjoyed a clean sweep of all 30 seats allocated to Tehran in the parliamentary elections.",
          "image": "assets/imgs/background/4.jpg"
        },
        {
          "id": 2,
          "title": "Rue Manon Garnier",
          "description": "In 2013 his backing and that of Ayatollah Hashemi Rafsanjani were crucial in Rouhani’s victory.",
          "image": "assets/imgs/background/13.jpg"
        },
        {
          "id": 3,
          "title": "Rue de Moulin",
          "description": "At the end of the day, he’s not challenging Rouhani, he’s come to Rouhani’s support.",
          "image": "assets/imgs/background/14.jpg"
        },
        {
          "id": 4,
          "title": "Boulevard de Lagarde",
          "description": "Dozens of flights were reportedly cancelled at Beijing’s airport, the world’s second busiest",
          "image": "assets/imgs/background/3.jpg"
        }
      ]
    };
  }

  //* Data Set for page 2
  getDataForLayout2 = (): any => {
    return {
      'toolbarTitle': 'Styled cards 2',
      "items": [
        {
          "id": 1,
          "title": "San Francisco",
          "icon": "location",
          "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
          "image": "assets/imgs/background/25.jpg",
          "priceText": "Price",
          "price": "$750",
          "seeAll": "See All",
          "arrowIcon": "arrow-round-forward",
          "button": "Buy Now",
          "shareIcon": "ellipsis-horizontal",
          "gallery": [
            {
              "id": 1,
              "image": "assets/imgs/background/31.jpg",
            },
            {
              "id": 2,
              "image": "assets/imgs/background/30.jpg",
            },
            {
              "id": 3,
              "image": "assets/imgs/background/29.jpg",
            },
            {
              "id": 4,
              "image": "assets/imgs/background/25.jpg",
            },
            {
              "id": 5,
              "image": "assets/imgs/background/26.jpg",
            },
            {
              "id": 6,
              "image": "assets/imgs/background/24.jpg",
            },
            {
              "id": 7,
              "image": "assets/imgs/background/11.jpg",
            },
            {
              "id": 8,
              "image": "assets/imgs/background/10.jpg",
            }
          ],
        },
        {
          "id": 2,
          "title": "Paris",
          "icon": "location",
          "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
          "image": "assets/imgs/background/32.jpg",
          "priceText": "Price",
          "price": "$1300",
          "seeAll": "See All",
          "arrowIcon": "arrow-round-forward",
          "button": "Buy Now",
          "shareIcon": "ellipsis-horizontal",
          "gallery": [
            {
              "id": 1,
              "image": "assets/imgs/background/10.jpg",
            },
            {
              "id": 2,
              "image": "assets/imgs/background/13.jpg",
            },
            {
              "id": 3,
              "image": "assets/imgs/background/8.jpg",
            },
            {
              "id": 4,
              "image": "assets/imgs/background/11.jpg",
            },
            {
              "id": 5,
              "image": "assets/imgs/background/16.jpg",
            },
            {
              "id": 6,
              "image": "assets/imgs/background/15.jpg",
            },
            {
              "id": 7,
              "image": "assets/imgs/background/19.jpg",
            },
            {
              "id": 8,
              "image": "assets/imgs/background/21.jpg",
            }
          ],
        },
        {
          "id": 3,
          "title": "Moscow",
          "icon": "location",
          "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
          "image": "assets/imgs/background/30.jpg",
          "priceText": "Price",
          "price": "$1735",
          "seeAll": "See All",
          "arrowIcon": "arrow-round-forward",
          "button": "Buy Now",
          "shareIcon": "ellipsis-horizontal",
          "gallery": [
            {
              "id": 1,
              "image": "assets/imgs/background/31.jpg",
            },
            {
              "id": 2,
              "image": "assets/imgs/background/30.jpg",
            },
            {
              "id": 3,
              "image": "assets/imgs/background/29.jpg",
            },
            {
              "id": 4,
              "image": "assets/imgs/background/25.jpg",
            },
            {
              "id": 5,
              "image": "assets/imgs/background/26.jpg",
            },
            {
              "id": 6,
              "image": "assets/imgs/background/24.jpg",
            },
            {
              "id": 7,
              "image": "assets/imgs/background/11.jpg",
            },
            {
              "id": 8,
              "image": "assets/imgs/background/10.jpg",
            }
          ],
        },
        {
          "id": 4,
          "title": "San Francisco",
          "icon": "location",
          "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
          "image": "assets/imgs/background/29.jpg",
          "priceText": "Price",
          "price": "$750",
          "seeAll": "See All",
          "arrowIcon": "arrow-round-forward",
          "button": "Buy Now",
          "shareIcon": "ellipsis-horizontal",
          "gallery": [
            {
              "id": 1,
              "image": "assets/imgs/background/15.jpg",
            },
            {
              "id": 2,
              "image": "assets/imgs/background/16.jpg",
            },
            {
              "id": 3,
              "image": "assets/imgs/background/19.jpg",
            },
            {
              "id": 4,
              "image": "assets/imgs/background/21.jpg",
            },
            {
              "id": 5,
              "image": "assets/imgs/background/11.jpg",
            },
            {
              "id": 6,
              "image": "assets/imgs/background/10.jpg",
            },
            {
              "id": 7,
              "image": "assets/imgs/background/6.jpg",
            },
            {
              "id": 8,
              "image": "assets/imgs/background/8.jpg",
            }
          ],
        },
      ]
    };
  }

  //* Data Set for page 3
  getDataForLayout3 = (): any => {
    return {
      'toolbarTitle': 'Full image cards',
      "items": [
        {
          "id": 1,
          "category": "best offer",
          "image": "assets/imgs/background/32.jpg",
          "title": "Motocross Holidays",
          "subtitle": "West Avenue, NYC",
          "price": "$135.99",
        },
        {
          "id": 2,
          "category": "main event",
          "image": "assets/imgs/background/27.jpg",
          "title": "Open Air Concert",
          "subtitle": "Hyde Park, London",
          "price": "$312.99",
        },
        {
          "id": 3,
          "category": "Best Tourt",
          "image": "assets/imgs/background/31.jpg",
          "title": "Sea ture",
          "subtitle": "Guilin, Kweilin",
          "price": "$213.45",
        },
        {
          "id": 4,
          "category": "Mountain",
          "image": "assets/imgs/background/29.jpg",
          "title": "Mountain Trout",
          "subtitle": "Mountain Trout Camp",
          "price": "$338.60",
        },
        {
          "id": 5,
          "category": "Bridge Tour",
          "image": "assets/imgs/background/25.jpg",
          "title": "Bridge Tour",
          "subtitle": "BridgeClimb, Sydney",
          "price": "$410.85",
        },
        {
          "id": 6,
          "category": "best events",
          "image": "assets/imgs/background/30.jpg",
          "title": "Skateboard tour",
          "subtitle": "Hyde Park, London",
          "price": "$516.55",
        }
      ]
    };
  }

  //* Data Set for page 4
  getDataForLayout4 = (): any => {
    return {
      'toolbarTitle': 'News card',
      'items': [
        {
          'id': 1,
          'image': 'assets/imgs/background/10.jpg',
          'title': 'Chevrolet Corvette',
          'description': `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
        },
        {
          'id': 2,
          'image': 'assets/imgs/background/11.jpg',
          'title': 'BMW M3 ',
          'description': `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
        },
        {
          'id': 3,
          'image': 'assets/imgs/background/32.jpg',
          'title': 'XR250 Tornado',
          'description': `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
        },
        {
          'id': 4,
          'image': 'assets/imgs/background/31.jpg',
          'title': 'Shortboard',
          'description': `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
        },
        {
          'id': 5,
          'image': 'assets/imgs/background/30.jpg',
          'title': 'Skateboard decks ',
          'description': `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
        },
        {
          'id': 6,
          'image': 'assets/imgs/background/29.jpg',
          'title': ' Ski board ',
          'description': `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
        }
      ]
    };
  }


  getDataForTheme = (menuItem: any): Array<any> => {
    return this[
      'getDataFor' +
      menuItem.theme.charAt(0).toUpperCase() +
      menuItem.theme.slice(1)
    ]();
  }

  load(item: any): Observable<any> {
    const that = this;
    that.loadingService.show();
    if (AppSettings.IS_FIREBASE_ENABLED) {
      return new Observable(observer => {
        this.af
          .object('listView/googleCards/' + item.theme)
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
