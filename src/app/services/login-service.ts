import { IService } from './IService';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';
import { LoadingService } from './loading-service';

@Injectable({ providedIn: 'root' })
export class LoginService implements IService {

  constructor(public af: AngularFireDatabase, private loadingService: LoadingService) { }

  getTitle = (): string => 'Login pages';

  getAllThemes = (): Array<any> => {
    return [
      { 'url': 'login/0', 'title': 'Login + logo 1', 'theme': 'layout1' },
      { 'url': 'login/1', 'title': 'Login + logo 2', 'theme': 'layout2' }
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
      'headerTitle': 'Login + logo 1',
      "background": "assets/imgs/background/39.jpg",
      "logo": "assets/imgs/logo/2.png",
      "skip": "Skip",
      "username": "Enter your username",
      "password": "Enter your password",
      "labelUsername": "USERNAME",
      "labelPassword": "PASSWORD",
      "forgotPassword": "Forgot password?",
      "facebookLogin": "Login with",
      "login": "Login",
      "title": "Login to your account",
    };
  }

  //* Data Set for page 2
  getDataForLayout2 = (): any => {
    return {
      'headerTitle': 'Login + logo 2',
      "background": "assets/imgs/background/39.jpg",
      "forgotPassword": "Forgot password?",
      "labelUsername": "USERNAME",
      "labelPassword": "PASSWORD",
      "title": "Login to your account",
      "username": "Enter your username",
      "password": "Enter your password",
      "login": "Log In",
      "facebookLogin": "Login with",
      "register": "Register",
      "logo": "assets/imgs/logo/2.png",
    };
  }

  load(item: any): Observable<any> {
    this.loadingService.show();
    if (AppSettings.IS_FIREBASE_ENABLED) {
      return new Observable(observer => {
        this.af
          .object('login/' + item.theme)
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
