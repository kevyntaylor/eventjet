import { IService } from './IService';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';
import { LoadingService } from './loading-service';

@Injectable({ providedIn: 'root' })
export class ToggleService implements IService {

    constructor(public af: AngularFireDatabase, private loadingService: LoadingService) { }

    getTitle = (): string => 'Toggle';

    getAllThemes = (): Array<any> => {
        return [
            { 'url': 'toggle/0', 'title': 'With avatars', 'theme': 'layout1' },
            { 'url': 'toggle/1', 'title': 'Simple 2', 'theme': 'layout2' },
            { 'url': 'toggle/2', 'title': 'Simple', 'theme': 'layout3' },
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
            'toolbarTitle': 'With avatars',
            "title": "With avatars",
            "items": [
                {
                    "id": 0,
                    "title": "Theresa Mason",
                    "subtitle": "theresa@email",
                    "isChecked": false,
                    "avatar": "assets/imgs/avatar/20.jpg"
                },
                {
                    "id": 1,
                    "title": "Laetitia Duhamel",
                    "subtitle": "laetitia@email",
                    "isChecked": false,
                    "avatar": "assets/imgs/avatar/10.jpg"
                },
                {
                    "id": 2,
                    "title": "Marine Aubry",
                    "subtitle": "marine@email",
                    "isChecked": false,
                    "avatar": "assets/imgs/avatar/11.jpg"
                },
                {
                    "id": 3,
                    "title": "Samantha Kennedy",
                    "subtitle": "samantha@email",
                    "isChecked": false,
                    "avatar": "assets/imgs/avatar/12.jpg"
                },
                {
                    "id": 4,
                    "title": "Juliette Blondel",
                    "subtitle": "juliette@email",
                    "isChecked": false,
                    "avatar": "assets/imgs/avatar/13.jpg"
                },
                {
                    "id": 5,
                    "title": "Isabelle Pascal",
                    "subtitle": "isabelle@email",
                    "isChecked": false,
                    "avatar": "assets/imgs/avatar/14.jpg"
                },
                {
                    "id": 6,
                    "title": "Valentine Roy",
                    "subtitle": "valentine@email",
                    "isChecked": false,
                    "avatar": "assets/imgs/avatar/15.jpg"
                },
                {
                    "id": 7,
                    "title": "Alice Kelly",
                    "subtitle": "alice@emai",
                    "isChecked": false,
                    "avatar": "assets/imgs/avatar/16.jpg"
                },
                {
                    "id": 8,
                    "title": "Caitlin Wilkinson",
                    "subtitle": "caitlin@email",
                    "isChecked": false,
                    "avatar": "assets/imgs/avatar/17.jpg"
                },
                {
                    "id": 9,
                    "title": "Camille Garnier",
                    "subtitle": "camille@email",
                    "isChecked": false,
                    "avatar": "assets/imgs/avatar/18.jpg"
                },
                {
                    "id": 10,
                    "title": "Suzanne Petit",
                    "subtitle": "suzanne@email",
                    "isChecked": false,
                    "avatar": "assets/imgs/avatar/19.jpg"
                },
                {
                    "id": 11,
                    "title": "Stacey Harris",
                    "subtitle": "stacey@email",
                    "isChecked": false,
                    "avatar": "assets/imgs/avatar/20.jpg"
                },
                {
                    "id": 12,
                    "title": "Jamie Clark",
                    "subtitle": "jamie@email",
                    "isChecked": false,
                    "avatar": "assets/imgs/avatar/21.jpg"
                }
            ]
        };
    }

    //* Data Set for page 2
    getDataForLayout2 = (): any => {
        return {
            'toolbarTitle': 'Simple 2',
            "title": "Simple 2",
            "items": [
                {
                    "id": 1,
                    "title": "bilic@yahoo.com",
                    "subtitle": "Daniel",
                    "isChecked": true
                },
                {
                    "id": 2,
                    "title": "roussel@yahoo.com",
                    "subtitle": "Manon",
                    "isChecked": false
                },
                {
                    "id": 4,
                    "title": "chevallier@mail.com",
                    "subtitle": "Antoine",
                    "isChecked": false
                },
                {
                    "id": 3,
                    "title": "laurent@gmail.com",
                    "subtitle": "Michel",
                    "isChecked": false
                },
                {
                    "id": 5,
                    "title": "delahaye@mail.com",
                    "subtitle": "Laurence",
                    "isChecked": false
                },
                {
                    "id": 6,
                    "title": "valentin@mail.com",
                    "subtitle": "Pénélope",
                    "isChecked": true
                },
                {
                    "id": 7,
                    "title": "hebert@mail.com",
                    "subtitle": "Adèle",
                    "isChecked": false
                },
                {
                    "id": 8,
                    "title": "delattre@yahoo.com",
                    "subtitle": "Monique",
                    "isChecked": false
                },
                {
                    "id": 9,
                    "title": "mahe@mail.com",
                    "subtitle": "Charles",
                    "isChecked": false
                }
            ]
        };
    }

    //* Data Set for page 3
    getDataForLayout3 = (): any => {
        return {
            'toolbarTitle': 'Simple',
            "title": "Simple",
            "items": [
                {
                    "id": 0,
                    "title": "United Kingdom",
                    "isChecked": true
                },
                {
                    "id": 1,
                    "title": "South Africa",
                    "isChecked": false
                },
                {
                    "id": 2,
                    "title": "Qatar",
                    "isChecked": false
                },
                {
                    "id": 3,
                    "title": "Philippines",
                    "isChecked": false
                },
                {
                    "id": 4,
                    "title": "New Zealand",
                    "isChecked": true
                },
                {
                    "id": 5,
                    "title": "Mongolia",
                    "isChecked": true
                },
                {
                    "id": 6,
                    "title": "Luxembourg",
                    "isChecked": true
                },
                {
                    "id": 7,
                    "title": "Jamaica",
                    "isChecked": false
                },
                {
                    "id": 8,
                    "title": "India",
                    "isChecked": false
                },
                {
                    "id": 9,
                    "title": "Grenada",
                    "isChecked": false
                },
                {
                    "id": 10,
                    "title": "France",
                    "isChecked": false
                },
                {
                    "id": 11,
                    "title": "Ecuador",
                    "isChecked": false
                },
                {
                    "id": 12,
                    "title": "Argentina",
                    "isChecked": false
                }
            ]
        };
    }

    load(item: any): Observable<any> {
        this.loadingService.show();
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(observer => {
                this.af
                    .object('toggle/' + item.theme)
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
