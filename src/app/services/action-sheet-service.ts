import { IService } from './IService';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';
import { LoadingService } from './loading-service';

@Injectable({ providedIn: 'root' })
export class ActionSheetService implements IService {

  constructor(public af: AngularFireDatabase, private loadingService: LoadingService) { }

  getId = (): string => 'actionSheet';

  getTitle = (): string => 'Action Sheet';

  getAllThemes = (): Array<any> => {
    return [
      { 'url': 'action-sheet/0', 'title': 'Basic', 'theme': 'layout1' },
      { 'url': 'action-sheet/1', 'title': 'News', 'theme': 'layout2' },
      { 'url': 'action-sheet/2', 'title': 'With Text Header', 'theme': 'layout3' }
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
      'toolbarTitle': 'Basic',
      "headerImage": "assets/imgs/background/11.jpg",
      "shareIcon": "ellipsis-horizontal",
      "actionSheet": {
        "title": "Choose what to do with this card?",
        "buttons": [
          {
            "text": "Mark as read",
            "role": "destructive"
          },
          {
            "text": "Follow author"
          },
          {
            "text": "Read more info"
          },
          {
            "text": "More from category"
          },
          {
            "text": "Cancel",
            "role": "cancel"
          }
        ]
      },
      "items": [
        {
          "id": 1,
          "title": " San Francisco",
          "subtitle": "Golden Gate Bridge",
          "category": "NEW OFFER",
          "button": "$63.99",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
          "productDescriptions": [
            {
              "id": 1,
              "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            },
            {
              "id": 2,
              "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },
            {
              "id": 3,
              "description": "Passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum"
            },
            {
              "id": 4,
              "description": "Passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum"
            }
          ]
        }
      ]
    }
  };

  //* Data Set for page 2
  getDataForLayout2 = (): any => {
    return {
      'toolbarTitle': 'News',
      "title": "Top Stories",
      "recommender": "Recommender",
      "shareIcon": "ellipsis-horizontal",
      "buttonSeeAll": "See All",
      "iconMore": "arrow-forward",
      "actionSheet": {
        "title": "Choose what to do with this card?",
        "buttons": [
          {
            "text": "Mark as read",
            "role": "destructive"
          },
          {
            "text": "Follow author"
          },
          {
            "text": "Read more info"
          },
          {
            "text": "More from category"
          },
          {
            "text": "Cancel",
            "role": "cancel"
          }
        ]
      },
      "items": [
        {
          "id": 1,
          "avatar": "assets/imgs/avatar/11.jpg",
          "avatarTitle": "Pena Valdez",
          "avatarSubtitle": "pena@gmail.com",
          "category": "Fashion",
          "backgroundCard": "assets/imgs/background/21.jpg",
          "title": "Women's Hairstyles",
          "description": "It is a long established fact that a reader will be distracted by the readable....",
          "likeIcon": "heart",
          "likeNumber": "4",
          "likeText": "Like",
          "commentIcon": "chatbubbles",
          "commentNumber": "4",
          "commentText": "Comments",
        },
        {
          "id": 2,
          "avatar": "assets/imgs/avatar/12.jpg",
          "avatarTitle": "Grant Marshall",
          "avatarSubtitle": "grant@gmail.com",
          "category": "Fashion",
          "backgroundCard": "assets/imgs/background/20.jpg",
          "title": "Hair Colors",
          "description": "It is a long established fact that a reader will be distracted by the readable....",
          "likeIcon": "heart",
          "likeNumber": "4",
          "likeText": "Like",
          "commentIcon": "chatbubbles",
          "commentNumber": "4",
          "commentText": "Comments",
        },
        {
          "id": 3,
          "avatar": "assets/imgs/avatar/10.jpg",
          "avatarTitle": "Neil Roberts",
          "avatarSubtitle": "neil@gmail.com",
          "category": "Fashion",
          "backgroundCard": "assets/imgs/background/37.jpg",
          "title": "Male Hats",
          "description": "It is a long established fact that a reader will be distracted by the readable....",
          "likeIcon": "heart",
          "likeNumber": "4",
          "likeText": "Like",
          "commentIcon": "chatbubbles",
          "commentNumber": "4",
          "commentText": "Comments",
        }
      ],
      "category": [
        {
          "id": 1,
          "image": "assets/imgs/background/29.jpg",
          "title": "Skiing",
          "subtitle": "10 stories",
        },
        {
          "id": 2,
          "image": "assets/imgs/background/30.jpg",
          "title": "Skateboard",
          "subtitle": "13 stories",
        },
        {
          "id": 3,
          "image": "assets/imgs/background/31.jpg",
          "title": "Surfing",
          "subtitle": "12 stories",
        },
        {
          "id": 4,
          "image": "assets/imgs/background/32.jpg",
          "title": "Motorcycle",
          "subtitle": "4 stories",
        },
        {
          "id": 5,
          "image": "assets/imgs/background/24.jpg",
          "title": "Concert",
          "subtitle": "10 stories",
        },
        {
          "id": 6,
          "image": "assets/imgs/background/23.jpg",
          "title": "Music",
          "subtitle": "8 stories",
        },
        {
          "id": 7,
          "image": "assets/imgs/background/27.jpg",
          "title": "Guitars",
          "subtitle": "9 stories",
        },
        {
          "id": 8,
          "image": "assets/imgs/background/28.jpg",
          "title": "Concert",
          "subtitle": "33 stories",
        },
        {
          "id": 9,
          "image": "assets/imgs/background/19.jpg",
          "title": "Tennis",
          "subtitle": "2 stories",
        },
        {
          "id": 10,
          "image": "assets/imgs/background/21.jpg",
          "title": "Fashion",
          "subtitle": "23 storiesh",
        },
      ]
    };
  };

  //* Data Set for page 3
  getDataForLayout3 = (): any => {
    return {
      'toolbarTitle': 'With Text Header',
      "shareIcon": "ellipsis-horizontal",
      "actionSheet": {
        "title": "Choose what to do with this card?",
        "buttons": [
          {
            "text": "Mark as read",
            "role": "destructive"
          },
          {
            "text": "Follow author"
          },
          {
            "text": "Read more info"
          },
          {
            "text": "More from category"
          },
          {
            "text": "Cancel",
            "role": "cancel"
          }
        ]
      },
      "items": [
        {
          "id": 1,
          "category": "best events",
          "image": "assets/imgs/background/30.jpg",
          "title": "Skateboard tour",
          "subtitle": "West Avenue, NYC",
          "button": "$35.99"
        },
        {
          "id": 2,
          "category": "Bridge Tour",
          "image": "assets/imgs/background/25.jpg",
          "title": "Bridge Tour",
          "subtitle": "Hyde Park, London",
          "button": "$12.99"
        },
        {
          "id": 3,
          "category": "Mountain",
          "image": "assets/imgs/background/29.jpg",
          "title": "Mountain Trout",
          "subtitle": "Guilin, Kweilin",
          "button": "$13.45"
        },
        {
          "id": 4,
          "category": "Best Tourt",
          "image": "assets/imgs/background/31.jpg",
          "title": "Sea ture",
          "subtitle": "Mountain Trout Camp",
          "button": "$38.60"
        },
        {
          "id": 5,
          "category": "main event",
          "image": "assets/imgs/background/27.jpg",
          "title": "Open Air Concert",
          "subtitle": "BridgeClimb, Sydney",
          "button": "$40.85"
        },
        {
          "id": 6,
          "category": "best offer",
          "image": "assets/imgs/background/32.jpg",
          "title": "Motocross Holidays",
          "subtitle": "Hyde Park, London ",
          "button": "$56.55"
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
          .object('actionSheet/' + item.theme)
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
