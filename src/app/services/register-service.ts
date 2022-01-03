import { IService } from './IService';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';
import { LoadingService } from './loading-service';

@Injectable({ providedIn: 'root' })
export class RegisterService implements IService {

  constructor(public af: AngularFireDatabase, private loadingService: LoadingService) { }

  getTitle = (): string => 'Register pages';

  getAllThemes = (): Array<any> => {
    return [
      { 'url': 'register/0', 'title': 'Register + logo', 'theme': 'layout1' },
      { 'url': 'register/1', 'title': 'Register + image', 'theme': 'layout2' }
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
      "toolbarTitle": "Register + logo",
      "logo": "assets/imgs/logo/2.png",
      "register": "register",
      "title": "Register your new account",
      "background": "assets/imgs/background/39.jpg",
      "username": "Enter your username",
      "city": "Your home town",
      "country": "Where are you from?",
      "password": "Enter your password",
      "email": "Your e-mail address",
      "skip": "Skip",
      "birth": "Date",
      "lableUsername": "USERNAME",
      "lablePassword": "PASSWORD",
      "lableEmail": "E-MAIL",
      "lableCountry": "COUNTRY",
      "lableCity": "CITY",
      "lableDate": "BIRTH DATE",
      "dateFormat": "MM/DD/YYYY",
    };
  }

  //* Data Set for page 2
  getDataForLayout2 = (): any => {
    return {
      "toolbarTitle": "Register + image",
      "title": "Register account",
      "background": "assets/imgs/background/34.jpg",
      "username": "Enter your username",
      "city": "Your home town",
      "country": "Where are you from?",
      "password": "Enter your password",
      "email": "Your e-mail address",
      "register": "register",
      "lableUsername": "USERNAME",
      "lablePassword": "PASSWORD",
      "lableEmail": "E-MAIL",
      "lableCountry": "COUNTRY",
      "lableCity": "CITY",
    };
  }

  load(item: any): Observable<any> {
    this.loadingService.show();
    if (AppSettings.IS_FIREBASE_ENABLED) {
      return new Observable(observer => {
        this.af
          .object('register/' + item.theme)
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
