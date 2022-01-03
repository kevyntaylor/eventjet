import { IService } from './IService';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';
import { LoadingService } from './loading-service';

@Injectable({ providedIn: 'root' })
export class SearchBarService implements IService {

  constructor(public af: AngularFireDatabase, private loadingService: LoadingService) { }

  getTitle = (): string => 'Search bars';

  getAllThemes = (): Array<any> => {
    return [
      { 'url': 'search-bars/0', 'title': 'Simple', 'theme': 'layout1' },
      { 'url': 'search-bars/1', 'title': 'Field + header', 'theme': 'layout2' },
      { 'url': 'search-bars/2', 'title': 'Field + header 2', 'theme': 'layout3' }
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
      'toolbarTitle': 'Simple',
      "items": [
        {
          "id": 1,
          "image": "assets/imgs/background/19.jpg",
          "title": "Rejkjavik",
          "subtitle": "New offer",
          "iconLike": "heart",
          "iconComment": "chatbubbles",
          "buttonLike": "Like",
          "buttonComment": "Comment",
          "price": "$135.99",
          "button": "Reservation"
        },
        {
          "id": 2,
          "image": "assets/imgs/background/28.jpg",
          "title": " Moscow",
          "subtitle": "New offer",
          "iconLike": "heart",
          "iconComment": "chatbubbles",
          "buttonLike": "Like",
          "buttonComment": "Comment",
          "price": "$312.99",
          "button": "Reservation"
        },
        {
          "id": 3,
          "image": "assets/imgs/background/33.jpg",
          "title": "San Francisco",
          "subtitle": "New offer",
          "iconLike": "heart",
          "iconComment": "chatbubbles",
          "buttonLike": "Like",
          "buttonComment": "Comment",
          "price": "$213.45",
          "button": "Reservation"
        },
        {
          "id": 4,
          "image": "assets/imgs/background/0.jpg",
          "title": "New York City",
          "subtitle": "New offer",
          "iconLike": "heart",
          "iconComment": "chatbubbles",
          "buttonLike": "Like",
          "buttonComment": "Comment",
          "price": "$338.60",
          "button": "Reservation"
        },
        {
          "id": 5,
          "image": "assets/imgs/background/32.jpg",
          "title": "Berlin",
          "subtitle": "New offer",
          "iconLike": "heart",
          "iconComment": "chatbubbles",
          "buttonLike": "Like",
          "buttonComment": "Comment",
          "price": "$410.85",
          "button": "Reservation"
        },
        {
          "id": 6,
          "image": "assets/imgs/background/34.jpg",
          "title": "London",
          "subtitle": "New offer",
          "iconLike": "heart",
          "iconComment": "chatbubbles",
          "buttonLike": "Like",
          "buttonComment": "Comment",
          "price": "$516.55",
          "button": "Reservation"
        }
      ]
    };
  }

  //* Data Set for page 2
  getDataForLayout2 = (): any => {
    return {
      'toolbarTitle': 'Field + header',
      "headerImage": "assets/imgs/background/39.jpg",
      "title": "Just type",
      "items": [
        {
          "title": "Theresa Mason",
          "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "avatar": "assets/imgs/avatar/10.jpg",
          "button": "GET"
        },
        {
          "title": "Samantha Kennedy",
          "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "avatar": "assets/imgs/avatar/11.jpg",
          "button": "GET"
        },
        {
          "title": "Ray Clarke",
          "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "avatar": "assets/imgs/avatar/12.jpg",
          "button": "GET"
        },
        {
          "title": "Fiona Edwards",
          "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "avatar": "assets/imgs/avatar/13.jpg",
          "button": "GET"
        },
        {
          "title": "Rebecca Reid",
          "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "avatar": "assets/imgs/avatar/14.jpg",
          "button": "GET"
        },
        {
          "title": "Victoria Simpson",
          "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "avatar": "assets/imgs/avatar/15.jpg",
          "button": "GET"
        },
        {
          "title": "Martin Mason",
          "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "avatar": "assets/imgs/avatar/16.jpg",
          "button": "GET"
        },
        {
          "title": "Jake Taylor",
          "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "avatar": "assets/imgs/avatar/17.jpg",
          "button": "GET"
        }
      ]
    };
  }

  //* Data Set for page 3
  getDataForLayout3 = (): any => {
    return {
      'toolbarTitle': 'Field + header 2',
      "title": "Search Friends",
      "items": [
        {
          "id": 1,
          "title": "Matthew Morris",
          "subtitle": "@matthew",
          "detail": "Berlin",
          "avatar": "assets/imgs/avatar/22.jpg"
        },
        {
          "id": 2,
          "title": "Nick Evans",
          "subtitle": "@nick",
          "detail": "Casablanca",
          "avatar": "assets/imgs/avatar/23.jpg"
        },
        {
          "id": 3,
          "title": "Abbie Wilson",
          "subtitle": "@abbie453",
          "detail": "Cape Town",
          "avatar": "assets/imgs/avatar/24.jpg"
        },
        {
          "id": 4,
          "title": "Laura Sarabia",
          "subtitle": "@laura",
          "detail": "New Taipei City",
          "avatar": "assets/imgs/avatar/19.jpg"
        },
        {
          "id": 5,
          "title": "Lizzie Rose",
          "subtitle": "@lizzie",
          "detail": "Jakarta",
          "avatar": "assets/imgs/avatar/20.jpg"
        },
        {
          "id": 6,
          "title": "Melissa Morris",
          "subtitle": "@melissa",
          "detail": "São Paulo",
          "avatar": "assets/imgs/avatar/21.jpg"
        },
        {
          "id": 7,
          "title": "Dominic Allen",
          "subtitle": "@dominic",
          "detail": "Guangzhou",
          "avatar": "assets/imgs/avatar/16.jpg"
        },
        {
          "id": 8,
          "title": "Heather Clark",
          "subtitle": "@heather",
          "detail": "Shanghai",
          "avatar": "assets/imgs/avatar/17.jpg"
        }
      ]
    };
  }

  load(item: any): Observable<any> {
    this.loadingService.show();
    if (AppSettings.IS_FIREBASE_ENABLED) {
      return new Observable(observer => {
        this.af
          .object('searchBars/' + item.theme)
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
