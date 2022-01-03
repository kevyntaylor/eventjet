import { IService } from './IService';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';
import { ToastService } from './toast-service';
import { LoadingService } from './loading-service';

@Injectable({ providedIn: 'root' })
export class WizardService implements IService {

  constructor(public af: AngularFireDatabase, private loadingService: LoadingService, private toastCtrl: ToastService) { }

  getTitle = (): string => 'Wizard';

  getAllThemes = (): Array<any> => {
    return [
      { 'url': 'wizard/0', 'title': 'Simple + icon', 'theme': 'layout1' },
      { 'url': 'wizard/1', 'title': 'Big image', 'theme': 'layout2' },
      { 'url': 'wizard/2', 'title': 'Big Image + Text', 'theme': 'layout3' },
      { 'url': 'wizard/3', 'title': 'Article with Text', 'theme': 'layout4' }
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
      'toolbarTitle': 'Simple + icon',
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

  //* Data Set for page 2
  getDataForLayout2 = (): any => {
    return {
      'toolbarTitle': 'Big image',
      "backgroundImage": "assets/imgs/background/36.jpg",
      "btnNext": "Next",
      "btnFinish": "Finish",
      "items": [
        {
          "welcome": "Welcome",
          "backgroundSlider": "assets/imgs/background/39.jpg",
          "title": "Welcome to our new iOS theme",
          "description": "Text for Fragment Example 3 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
          "welcome": "Welcome",
          "backgroundSlider": "assets/imgs/background/39.jpg",
          "title": "Welcome to our new iOS theme",
          "description": "Text for Fragment Example 3 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
          "welcome": "Welcome",
          "backgroundSlider": "assets/imgs/background/39.jpg",
          "title": "Welcome to our new iOS theme",
          "description": "Text for Fragment Example 3 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        }
      ]
    };
  }

  //* Data Set for page 3
  getDataForLayout3 = (): any => {
    return {
      'toolbarTitle': 'Big Image + Text',
      "btnNext": "Next",
      "btnFinish": "Finish",
      "items": [
        {
          "backgroundImage": "assets/imgs/background/17.jpg",
          "subtitle": "Cosmologist Stephen Hawking",
          "title": "Happy Anniversary, Juno! NASA Probe Marks 1 Year at Jupiter."
        },
        {
          "backgroundImage": "assets/imgs/background/41.jpg",
          "subtitle": "Bennu is an asteroid",
          "title": "Colorful Clouds on Jupiter by Juno"
        },
        {
          "backgroundImage": "assets/imgs/background/42.jpg",
          "subtitle": "Light elements clumpeds",
          "title": "Best Space Stories of The Week!"
        }
      ]
    };
  }

  //* Data Set for page 4
  getDataForLayout4 = (): any => {
    return {
      'toolbarTitle': 'Article with Text',
      'items': [
        {
          'backgroundImage': 'assets/imgs/background/30.jpg',
        },
        {
          'backgroundImage': 'assets/imgs/background/29.jpg',
        },
        {
          'backgroundImage': 'assets/imgs/background/31.jpg',
        }
      ],
      "title": "The generated Lorem Ipsum is therefore always free from repetition, injected humour",
      "description1": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      "image": "assets/imgs/background/32.jpg",
      "description2": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    };
  }

  load(item: any): Observable<any> {
    this.loadingService.show();
    if (AppSettings.IS_FIREBASE_ENABLED) {
      return new Observable(observer => {
        this.af
          .object('wizard/' + item.theme)
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
