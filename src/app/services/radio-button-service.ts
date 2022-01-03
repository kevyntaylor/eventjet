import { IService } from './IService';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';
import { LoadingService } from './loading-service';

@Injectable({ providedIn: 'root' })
export class RadioButtonService implements IService {

  constructor(public af: AngularFireDatabase, private loadingService: LoadingService) { }

  getTitle = (): string => 'Radio Button';

  getAllThemes = (): Array<any> => {
    return [
      { 'url': 'radio-button/0', 'title': 'Simple', 'theme': 'layout1' },
      { 'url': 'radio-button/1', 'title': 'With avatars', 'theme': 'layout2' },
      { 'url': 'radio-button/2', 'title': 'Simple 2', 'theme': 'layout3' }
    ];
  }

  getDataForTheme = (menuItem: any): any => {
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
      "title": "Your country",
      "selectedItem": 3,
      "items": [
        { "id": 1, "title": "The Gambia" },
        { "id": 2, "title": "Ecuador" },
        { "id": 4, "title": "Czechia" },
        { "id": 3, "title": "Brunei" },
        { "id": 5, "title": "Madagascar" },
        { "id": 6, "title": "Kuwait" },
        { "id": 7, "title": "Liechtenstein" },
        { "id": 8, "title": "Kiribati" },
        { "id": 9, "title": "Hungary" },
        { "id": 10, "title": "Fiji" },
        { "id": 11, "title": "Serbia" },
        { "id": 12, "title": "Saint Lucia" },
        { "id": 13, "title": "Portugal" }
      ]
    };
  }

  //* Data Set for page 2
  getDataForLayout2 = (): any => {
    return {
      'toolbarTitle': 'With avatars',
      "title": "Following",
      "selectedItem": 4,
      "items": [
        { "id": 1, "title": "Tara Saunders", "subtitle": "@tara333", "avatar": "assets/imgs/avatar/24.jpg" },
        { "id": 2, "title": "Daniel Perrin", "subtitle": "@daniel", "avatar": "assets/imgs/avatar/23.jpg" },
        { "id": 4, "title": "Jackson Phillips", "subtitle": "@jackson", "avatar": "assets/imgs/avatar/22.jpg" },
        { "id": 3, "title": "Antoine Chevallier", "subtitle": "@antoine", "avatar": "assets/imgs/avatar/21.jpg" },
        { "id": 5, "title": "Jessica White", "subtitle": "@jessica", "avatar": "assets/imgs/avatar/20.jpg" },
        { "id": 6, "title": "Laetitia Duhamel", "subtitle": "@laetitia", "avatar": "assets/imgs/avatar/19.jpg" },
        { "id": 7, "title": "Sylvie Rey", "subtitle": "@sylvie", "avatar": "assets/imgs/avatar/18.jpg" },
        { "id": 8, "title": "Julie Lewis", "subtitle": "@julie44", "avatar": "assets/imgs/avatar/17.jpg" },
        { "id": 9, "title": "Layla Chapman", "subtitle": "@layla", "avatar": "assets/imgs/avatar/16.jpg" },
        { "id": 10, "title": "Charlotte Pelletier", "subtitle": "@charlotte", "avatar": "assets/imgs/avatar/15.jpg" }
      ]
    };
  }

  //* Data Set for page 3
  getDataForLayout3 = (): any => {
    return {
      'toolbarTitle': 'Simple 2',
      "title": "Loctions",
      "selectedItem": 4,
      "items": [
        { "id": 1, "title": "New York City", "subtitle": "United States" },
        { "id": 2, "title": "Paris", "subtitle": "France" },
        { "id": 4, "title": "Istanbul", "subtitle": "Turkey" },
        { "id": 3, "title": "Tokyo", "subtitle": "‎Japan" },
        { "id": 5, "title": "Moscow", "subtitle": "Russia" },
        { "id": 6, "title": "Mexico City", "subtitle": "Mexico" },
        { "id": 7, "title": "Rio de Janeiro", "subtitle": "Brazil" },
        { "id": 8, "title": "Berlin", "subtitle": "Germany" },
        { "id": 9, "title": "Madrid", "subtitle": "Spain" },
        { "id": 10, "title": "London", "subtitle": "United Kingdom" },
        { "id": 11, "title": "Shanghai", "subtitle": "China" },
        { "id": 12, "title": "Seoul", "subtitle": "South Korea" },
        { "id": 13, "title": "Cairo", "subtitle": "Egypt" }
      ]
    };
  }

  load(item: any): Observable<any> {
    this.loadingService.show();
    if (AppSettings.IS_FIREBASE_ENABLED) {
      return new Observable(observer => {
        this.af
          .object('radioButton/' + item.theme)
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
