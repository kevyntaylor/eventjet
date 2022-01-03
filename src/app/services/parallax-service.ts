import { IService } from './IService';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';
import { LoadingService } from './loading-service';

@Injectable({ providedIn: 'root' })
export class ParallaxService implements IService {

  constructor(public af: AngularFireDatabase, private loadingService: LoadingService) { }

  getTitle = (): string => 'Parallax';

  getAllThemes = (): Array<any> => {
    return [
      { 'url': 'parallax/0', 'title': 'News List', 'theme': 'layout1' },
      { 'url': 'parallax/1', 'title': 'Prifile', 'theme': 'layout2' },
      { 'url': 'parallax/2', 'title': 'Parallax Event', 'theme': 'layout3' },
      { 'url': 'parallax/3', 'title': 'News', 'theme': 'layout4' }
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
      'toolbarTitle': 'News List',
      "headerImage": "assets/imgs/background/34.jpg",
      "title": "Engage real-time",
      "subtitle": "Startup Pitches",
      "items": [
        {
          "id": 1,
          "title": "Stacey Simpson",
          "subtitle": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
          "image": "assets/imgs/avatar/24.jpg",
          "imageAlt": "avatar",
          "button": "Read"
        },
        {
          "id": 2,
          "title": "Samantha Reynolds",
          "subtitle": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
          "image": "assets/imgs/avatar/10.jpg",
          "imageAlt": "avatar",
          "button": "Read"
        },
        {
          "id": 3,
          "title": "Stacey Harris",
          "subtitle": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
          "image": "assets/imgs/avatar/11.jpg",
          "imageAlt": "avatar",
          "button": "Read"
        },
        {
          "id": 4,
          "title": "Jacqueline Guyon",
          "subtitle": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
          "image": "assets/imgs/avatar/12.jpg",
          "imageAlt": "avatar",
          "button": "Read"
        },
        {
          "id": 5,
          "title": "Mia Langevoort",
          "subtitle": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
          "image": "assets/imgs/avatar/13.jpg",
          "imageAlt": "avatar",
          "button": "Read"
        },
        {
          "id": 6,
          "title": "Amy Simsek",
          "subtitle": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
          "image": "assets/imgs/avatar/14.jpg",
          "imageAlt": "avatar",
          "button": "Read"
        },
        {
          "id": 7,
          "title": "Charlotte Sital",
          "subtitle": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
          "image": "assets/imgs/avatar/15.jpg",
          "imageAlt": "avatar",
          "button": "Read"
        },
        {
          "id": 8,
          "title": "Iria Padrón",
          "subtitle": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
          "image": "assets/imgs/avatar/16.jpg",
          "imageAlt": "avatar",
          "button": "Read"
        },
        {
          "id": 9,
          "title": "Laura Sarabia",
          "subtitle": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
          "image": "assets/imgs/avatar/17.jpg",
          "imageAlt": "avatar",
          "button": "Read"
        },
        {
          "id": 10,
          "title": "Alexia Bañuelos",
          "subtitle": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
          "image": "assets/imgs/avatar/18.jpg",
          "imageAlt": "avatar",
          "button": "Read"
        },
        {
          "id": 11,
          "title": "Erika Quiroz",
          "subtitle": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
          "image": "assets/imgs/avatar/19.jpg",
          "imageAlt": "avatar",
          "button": "Read"
        },
        {
          "id": 12,
          "title": "Emma Banda",
          "subtitle": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
          "image": "assets/imgs/avatar/20.jpg",
          "imageAlt": "Presque Isle Harbor",
          "button": "Read"
        }
      ]
    };
  }

  //* Data Set for page 2
  getDataForLayout2 = (): any => {
    return {
      'toolbarTitle': 'Profile',
      "headerImage": "assets/imgs/background/36.jpg",
      "avatar": "assets/imgs/avatar/14.jpg",
      "title": "Jessica White",
      "subtitle": "Lorem ipsum dolor sit amet",
      "buttonFollowers": "Followers",
      "buttonFollowing": "Following",
      "buttonEvents": "Events",
      "followers": "2300",
      "following": "3230",
      "events": "230",

      // Data Page 1
      "page1": {
        "items": [
          {
            "id": 1,
            "button": "Read more",
            "image": "assets/imgs/background/21.jpg",
            "title": "Osteria Francescana",
            "subtitle": "Modena, Italy",
          },
          {
            "id": 2,
            "button": "Read more",
            "image": "assets/imgs/background/19.jpg",
            "title": "Camping du Brec",
            "subtitle": "Le Brec, France",
          },
          {
            "id": 3,
            "button": "Read more",
            "image": "assets/imgs/background/20.jpg",
            "title": "Park Winterberg",
            "subtitle": "Winterberg, Germany",
          },
          {
            "id": 4,
            "button": "Read more",
            "image": "assets/imgs/background/12.jpg",
            "title": "Singapore Airlines",
            "subtitle": "Singapore, ",
          },
          {
            "id": 5,
            "button": "Read more",
            "image": "assets/imgs/background/16.jpg",
            "title": "Osteria Francescana",
            "subtitle": "Modena, Italy",
          },
          {
            "id": 6,
            "button": "Read more",
            "image": "assets/imgs/background/22.jpg",
            "title": "Park Winterberg",
            "subtitle": "Winterberg, Germany",
          }
        ]
      },
      // Data Page 2
      "page2": {
        "items": [
          {
            "id": 1,
            "title": "Isabel Anguiano",
            "image": "assets/imgs/avatar/24.jpg",
            "ionButton": "Follow",
          },
          {
            "id": 2,
            "title": "Iria Mascareñas",
            "image": "assets/imgs/avatar/10.jpg",
            "ionButton": "Follow",
          },
          {
            "id": 3,
            "title": "Maria Cardenas",
            "image": "assets/imgs/avatar/11.jpg",
            "ionButton": "Follow",
          },
          {
            "id": 4,
            "title": "Silvia Salvador",
            "image": "assets/imgs/avatar/12.jpg",
            "ionButton": "Follow",
          },
          {
            "id": 5,
            "title": "Marina Vidal",
            "image": "assets/imgs/avatar/13.jpg",
            "ionButton": "Follow",
          },
          {
            "id": 6,
            "title": "Sara Alcántarl",
            "image": "assets/imgs/avatar/14.jpg",
            "ionButton": "Follow",
          },
          {
            "id": 7,
            "title": "Gabriela Reyes",
            "image": "assets/imgs/avatar/15.jpg",
            "ionButton": "Follow",
          }
        ]
      },
      // Data Page 3
      "page3": {

        "items": [
          {
            "id": 1,
            "title": "Jessica Miles",
            "image": "assets/imgs/avatar/15.jpg",
            "ionButton": "Unfollow",
          },
          {
            "id": 2,
            "title": "Natasha Gamble",
            "image": "assets/imgs/avatar/16.jpg",
            "ionButton": "Unfollow",
          },
          {
            "id": 3,
            "title": "Natasha Gamble",
            "image": "assets/imgs/avatar/17.jpg",
            "ionButton": "Unfollow",
          },
          {
            "id": 4,
            "title": "Marisa Cain",
            "image": "assets/imgs/avatar/18.jpg",
            "ionButton": "Unfollow",
          },
          {
            "id": 5,
            "title": "Stafford Carrillo",
            "image": "assets/imgs/avatar/19.jpg",
            "ionButton": "Unfollow",
          },
          {
            "id": 6,
            "title": "Julia Petersen",
            "image": "assets/imgs/avatar/20.jpg",
            "ionButton": "Unfollow",
          },
          {
            "id": 7,
            "title": "Gabriela Reyes",
            "image": "assets/imgs/avatar/21.jpg",
            "ionButton": "Unfollow",
          },
        ]
      },
    };
  }

  //* Data Set for page 3
  getDataForLayout3 = (): any => {
    return {
      'toolbarTitle': 'Parallax Event',
      "headerImage": "assets/imgs/background/8.jpg",
      "segmentButton1": "Events",
      "segmentButton2": "Gallery",
      "segmentButton3": "Location",
      // Data Page 1
      "page1": {
        "items": [
          {
            "id": 1,
            "avatar": "assets/imgs/avatar/10.jpg",
            "title": "Neil Roberts",
            "subtitle": "neil@gmail.com",
            "time": "15min ago",
            "image": "assets/imgs/background/13.jpg",
            "cardTitle": "Paris",
            "description": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
            "iconLike": "heart",
            "iconComment": "chatbubbles",
            "numberLike": "12 Likes",
            "numberCommnet": "4 Comments",
            "iconShere": "ellipsis-horizontal"

          },
          {
            "id": 2,
            "avatar": "assets/imgs/avatar/11.jpg",
            "title": "Samantha Kennedy",
            "subtitle": "samantha@gmail.com",
            "time": "18min ago",
            "image": "assets/imgs/background/16.jpg",
            "cardTitle": "Moscow",
            "description": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
            "iconLike": "heart",
            "iconComment": "chatbubbles",
            "numberLike": "12 Likes",
            "numberCommnet": "4 Comments",
            "iconShere": "ellipsis-horizontal"
          },
          {
            "id": 3,
            "avatar": "assets/imgs/avatar/12.jpg",
            "title": "Liam Hughes",
            "subtitle": "liam@gmail.com",
            "time": "20min ago",
            "image": "assets/imgs/background/19.jpg",
            "cardTitle": "London",
            "description": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
            "iconLike": "heart",
            "iconComment": "chatbubbles",
            "numberLike": "12 Likes",
            "numberCommnet": "4 Comments",
            "iconShere": "ellipsis-horizontal"
          },
          {
            "id": 4,
            "avatar": "assets/imgs/avatar/13.jpg",
            "title": "Caitlin Wilkinson",
            "subtitle": "caitlin@gmail.com",
            "time": "21min ago",
            "image": "assets/imgs/background/21.jpg",
            "cardTitle": "Berlin",
            "description": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
            "iconLike": "heart",
            "iconComment": "chatbubbles",
            "numberLike": "12 Likes",
            "numberCommnet": "4 Comments",
            "iconShere": "ellipsis-horizontal"
          }
        ]
      },
      // Data Page 2
      "page2": {
        "items": [
          {
            "id": 1,
            "image": "assets/imgs/background/21.jpg",
          },
          {
            "id": 2,
            "image": "assets/imgs/background/19.jpg",
          },
          {
            "id": 3,
            "image": "assets/imgs/background/16.jpg",
          },
          {
            "id": 4,
            "image": "assets/imgs/background/13.jpg",
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
            "image": "assets/imgs/background/21.jpg",
          },
          {
            "id": 9,
            "image": "assets/imgs/background/16.jpg",
          },
          {
            "id": 10,
            "image": "assets/imgs/background/10.jpg",
          },
          {
            "id": 11,
            "image": "assets/imgs/background/6.jpg",
          },
          {
            "id": 12,
            "image": "assets/imgs/background/8.jpg",
          },
        ]
      },
      // Data Page 3
      "page3": {
        "title": "Your location",
        "headerTitle": "Full Screen View",
        "map": {
          "lat": 40.712562,
          "lng": -74.005911,
          "zoom": 15,
          "mapTypeControl": true,
          "streetViewControl": true,
          "styles": [
            {
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#ebe3cd"
                }
              ]
            },
            {
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#523735"
                }
              ]
            },
            {
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#f5f1e6"
                }
              ]
            },
            {
              "featureType": "administrative",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#c9b2a6"
                }
              ]
            },
            {
              "featureType": "administrative.land_parcel",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#dcd2be"
                }
              ]
            },
            {
              "featureType": "administrative.land_parcel",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#ae9e90"
                }
              ]
            },
            {
              "featureType": "landscape.natural",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#dfd2ae"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#dfd2ae"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#93817c"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#a5b076"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#447530"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#f5f1e6"
                }
              ]
            },
            {
              "featureType": "road.arterial",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#fdfcf8"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#f8c967"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#e9bc62"
                }
              ]
            },
            {
              "featureType": "road.highway.controlled_access",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#e98d58"
                }
              ]
            },
            {
              "featureType": "road.highway.controlled_access",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#db8555"
                }
              ]
            },
            {
              "featureType": "road.local",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#806b63"
                }
              ]
            },
            {
              "featureType": "transit.line",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#dfd2ae"
                }
              ]
            },
            {
              "featureType": "transit.line",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#8f7d77"
                }
              ]
            },
            {
              "featureType": "transit.line",
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#ebe3cd"
                }
              ]
            },
            {
              "featureType": "transit.station",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#dfd2ae"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#b9d3c2"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#92998d"
                }
              ]
            }
          ]
        }
      },
    };
  }

  //* Data Set for page 4
  getDataForLayout4 = (): any => {
    return {
      "toolbarTitle": "News",
      "headerImage": "assets/imgs/background/25.jpg",
      "title": "Infinit bridge in China.",
      "subtitle": "Infinit bridge",
      "shareIcon": "ellipsis-horizontal",
      "items": [
        {
          "id": 1,
          "image": "assets/imgs/background/11.jpg",
          "title": "Infinit bridge made in China.",
          "description": "Passages, and more recently"
        },
        {
          "id": 2,
          "image": "assets/imgs/background/10.jpg",
          "title": "Infinit bridge made in China.",
          "description": "Passages, and more recently"
        },
        {
          "id": 3,
          "image": "assets/imgs/background/32.jpg",
          "title": "Infinit bridge made in China.",
          "description": "Passages, and more recently"
        },
        {
          "id": 4,
          "image": "assets/imgs/background/38.jpg",
          "title": "Infinit bridge made in China.",
          "description": "Passages, and more recently"
        },
        {
          "id": 5,
          "image": "assets/imgs/background/34.jpg",
          "title": "Infinit bridge made in China.",
          "description": "Passages, and more recently"
        },
        {
          "id": 6,
          "image": "assets/imgs/background/30.jpg",
          "title": "Infinit bridge made in China.",
          "description": "Passages, and more recently"
        },
        {
          "id": 7,
          "image": "assets/imgs/background/29.jpg",
          "title": "Infinit bridge made in China.",
          "description": "Passages, and more recently"
        },
        {
          "id": 8,
          "image": "assets/imgs/background/31.jpg",
          "title": "Infinit bridge made in China.",
          "description": "Passages, and more recently"
        }
      ]
    };
  }

  load(item: any): Observable<any> {
    this.loadingService.show();
    if (AppSettings.IS_FIREBASE_ENABLED) {
      return new Observable(observer => {
        this.af
          .object('parallax/' + item.theme)
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
