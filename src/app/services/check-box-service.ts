import { IService } from './IService';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';
import { LoadingService } from './loading-service';

@Injectable({ providedIn: 'root' })
export class CheckBoxService implements IService {

  constructor(public af: AngularFireDatabase, private loadingService: LoadingService) { }

  getTitle = (): string => 'Check Boxes';

  getAllThemes = (): Array<any> => {
    return [
      { 'url': 'check-boxes/0', 'title': 'Simple', 'theme': 'layout1' },
      { 'url': 'check-boxes/1', 'title': 'With Avatar', 'theme': 'layout2' },
      { 'url': 'check-boxes/2', 'title': 'Simple 2', 'theme': 'layout3' }
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
      "items": [
        {
          "id": 1,
          "title": "plegros@gmail.com",
          "isChecked": false
        },
        {
          "id": 2,
          "title": "fyundt@gmail.com",
          "isChecked": false
        },
        {
          "id": 4,
          "title": "godfrey.von@gmail.com",
          "isChecked": true
        },
        {
          "id": 3,
          "title": "joey.feil@gmail.com",
          "isChecked": true
        },
        {
          "id": 5,
          "title": "yframi@yahoo.com",
          "isChecked": true
        },
        {
          "id": 6,
          "title": "ytillman@gmail.com",
          "isChecked": true
        },
        {
          "id": 7,
          "title": "leola.kerluke@yahoo.com",
          "isChecked": true
        },
        {
          "id": 8,
          "title": "ignacio20@yahoo.com",
          "isChecked": true
        },
        {
          "id": 9,
          "title": "travis34@gmail.com",
          "isChecked": true
        },
        {
          "id": 10,
          "title": "sauer.brenna@gmail.com",
          "isChecked": true
        },
        {
          "id": 11,
          "title": "michelle27@gmail.com",
          "isChecked": true
        },
        {
          "id": 12,
          "title": "ludie56@gmail.com",
          "isChecked": true
        },
        {
          "id": 13,
          "title": "luisa.hauck@yahoo.com",
          "isChecked": true
        }
      ]
    }
  }

  //* Data Set for page 2
  getDataForLayout2 = (): any => {
    return {
      'toolbarTitle': 'With Avatar',
      "items": [
        {
          "id": 1,
          "title": "Isabel Anguiano",
          "subtitle": "@isabel",
          "isChecked": false,
          "image": "assets/imgs/avatar/11.jpg"
        },
        {
          "id": 2,
          "title": "Luna Adorno",
          "subtitle": "@luna",
          "isChecked": false,
          "image": "assets/imgs/avatar/10.jpg"
        },
        {
          "id": 3,
          "title": "Abbie Kelly",
          "subtitle": "@abbie",
          "isChecked": true,
          "image": "assets/imgs/avatar/19.jpg"
        },
        {
          "id": 4,
          "title": "Silvia Salvador",
          "subtitle": "@silvia",
          "isChecked": true,
          "image": "assets/imgs/avatar/14.jpg"
        },
        {
          "id": 5,
          "title": "Teresa Puga",
          "subtitle": "@teresa",
          "isChecked": true,
          "image": "assets/imgs/avatar/13.jpg"
        },
        {
          "id": 6,
          "title": "Tara Saunders",
          "subtitle": "@tara34",
          "isChecked": true,
          "image": "assets/imgs/avatar/12.jpg"
        },
        {
          "id": 7,
          "title": "Lisa Chapman",
          "subtitle": "@lisa957",
          "isChecked": true,
          "image": "assets/imgs/avatar/17.jpg"
        },
        {
          "id": 8,
          "title": "Evie Stevens",
          "subtitle": "@evie957",
          "isChecked": true,
          "image": "assets/imgs/avatar/16.jpg"
        },
        {
          "id": 9,
          "title": "Eva Tapia",
          "subtitle": "@eva",
          "isChecked": true,
          "image": "assets/imgs/avatar/15.jpg"
        },
        {
          "id": 10,
          "title": "Julia Requena",
          "subtitle": "@julia",
          "isChecked": true,
          "image": "assets/imgs/avatar/18.jpg"
        }
      ]
    }
  }

  //* Data Set for page 3
  getDataForLayout3 = (): any => {
    return {
      'toolbarTitle': 'Simple 2',
      "items": [
        {
          "id": 1,
          "title": "New York",
          "subtitle": "United States",
          "isChecked": true,
          "detail": "General Electric"
        },
        {
          "id": 2,
          "title": "Maranello",
          "subtitle": "Italy",
          "isChecked": false,
          "detail": "Ferrari"
        },
        {
          "id": 3,
          "title": "Boston",
          "subtitle": "United States",
          "isChecked": false,
          "detail": "Gillette"
        },
        {
          "id": 4,
          "title": "Munich",
          "subtitle": "Germany",
          "isChecked": true,
          "detail": "Siemens AG"
        },
        {
          "id": 5,
          "title": "Seul",
          "subtitle": "South Korea",
          "isChecked": true,
          "detail": "Hyundai"
        },
        {
          "id": 6,
          "title": "Herzogenaurach",
          "subtitle": "Germany",
          "isChecked": true,
          "detail": "Adidas"
        },
        {
          "id": 7,
          "title": "Redwood City",
          "subtitle": "United States",
          "isChecked": true,
          "detail": "Oracle Corporation"
        },
        {
          "id": 8,
          "title": "Amsterdam",
          "subtitle": "Netherlands",
          "isChecked": true,
          "detail": "Heineken Brewery"
        },
        {
          "id": 9,
          "title": "Tokyo",
          "subtitle": "Japan",
          "isChecked": true,
          "detail": "Canon"
        },
        {
          "id": 10,
          "title": "London",
          "subtitle": "United Kingdom",
          "isChecked": true,
          "detail": "Vodafone"
        },
        {
          "id": 11,
          "title": "Florence",
          "subtitle": "Italy",
          "isChecked": true,
          "detail": "Gucci"
        }
      ]
    }
  }

  load(item: any): Observable<any> {
    const that = this;
    that.loadingService.show();
    if (AppSettings.IS_FIREBASE_ENABLED) {
      return new Observable(observer => {
        this.af
          .object('checkBoxes/' + item.theme)
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
