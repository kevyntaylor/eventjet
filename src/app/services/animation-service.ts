import { IService } from './IService';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';
import { LoadingService } from './loading-service';

@Injectable({ providedIn: 'root' })
export class AnimationService implements IService {

  constructor(public af: AngularFireDatabase, private loadingService: LoadingService) { }

  getTitle = (): string => 'Animation';

  getAllThemes = (): Array<any> => {
    return [
      { 'url': 'animation/0', 'title': 'FadeIn Up', 'theme': 'layout1' },
      { 'url': 'animation/1', 'title': 'FadeIn Left', 'theme': 'layout2' },
      { 'url': 'animation/2', 'title': 'BounceIn', 'theme': 'layout3' },
      { 'url': 'animation/3', 'title': 'ZoomIn', 'theme': 'layout4' },
      { 'url': 'animation/4', 'title': 'BounceIn Left', 'theme': 'layout5' },
      { 'url': 'animation/5', 'title': 'FadeIn', 'theme': 'layout6' },
      { 'url': 'animation/6', 'title': 'BounceIn Right And ZoomIn', 'theme': 'layout7' },
      { 'url': 'animation/7', 'title': 'SlideIn Left', 'theme': 'layout8' },
      { 'url': 'animation/8', 'title': 'SlideIn Up And ZoomIn', 'theme': 'layout9' },
      { 'url': 'animation/9', 'title': 'FadeIn Right', 'theme': 'layout10' }

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
      'toolbarTitle': 'FadeIn Up',
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

  //* Data Set for page 2
  getDataForLayout2 = (): any => {
    return {
      'toolbarTitle': 'FadeIn Left',
      "title": "Make order now!",
      "subtitle": "Reorder list by your wish.",
      "button": "Confirm",
      "items": [
        {
          "id": 1,
          "title": "Keyboard",
          "subtitle": "20% Off",
          "image": "assets/imgs/avatar/2.jpg",
          "icon": "icon icon-wallet-travel",
          "price": "$199.99"
        },
        {
          "id": 2,
          "title": "Headphones",
          "subtitle": "15% Off",
          "image": "assets/imgs/avatar/3.jpg",
          "icon": "icon icon-wallet-travel",
          "price": "$295.99"
        },
        {
          "id": 3,
          "title": "Watch",
          "subtitle": "22% Off",
          "image": "assets/imgs/avatar/6.jpg",
          "icon": "icon icon-wallet-travel",
          "price": "$1032.99"
        },
        {
          "id": 4,
          "title": "Dualshock controller",
          "subtitle": "10% Off",
          "image": "assets/imgs/avatar/0.jpg",
          "icon": "icon icon-wallet-travel",
          "price": "$1269.99"
        },
        {
          "id": 5,
          "title": "Canon Photoaparat",
          "subtitle": "12% Off",
          "image": "assets/imgs/avatar/5.jpg",
          "icon": "icon icon-wallet-travel",
          "price": "$34.99"
        },
        {
          "id": 6,
          "title": "Objective",
          "subtitle": "14% Off",
          "image": "assets/imgs/avatar/7.jpg",
          "icon": "icon icon-wallet-travel",
          "price": "$499.99"
        },
      ]
    };
  }

  //* Data Set for page 3
  getDataForLayout3 = (): any => {
    return {
      'toolbarTitle': 'BounceIn',
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

  //* Data Set for page 4
  getDataForLayout4 = (): any => {
    return {
      'toolbarTitle': 'ZoomIn',
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

  //* Data Set for page 5
  getDataForLayout5 = (): any => {
    return {
      'toolbarTitle': 'BounceIn Left',
      "header": "Followings",
      "items": [
        {
          "id": 1,
          "title": "Isabel Anguiano",
          "subtitle": "Lorem ipsum dolor sit amet, consectetur",
          "image": "assets/imgs/avatar/24.jpg",
          "ionButton": "Follow",
          "iconDelete": "trash",
          "delate": "Delete"

        },
        {
          "id": 2,
          "title": "Iria Mascareñas",
          "subtitle": "Lorem ipsum dolor sit amet, consectetur",
          "image": "assets/imgs/avatar/10.jpg",
          "ionButton": "Follow",
          "iconDelete": "trash",
          "delate": "Delete"
        },
        {
          "id": 3,
          "title": "Maria Cardenas",
          "subtitle": "Lorem ipsum dolor sit amet, consectetur",
          "image": "assets/imgs/avatar/11.jpg",
          "ionButton": "Follow",
          "iconDelete": "trash",
          "delate": "Delete"
        },
        {
          "id": 4,
          "title": "Silvia Salvador",
          "subtitle": "Lorem ipsum dolor sit amet, consectetur",
          "image": "assets/imgs/avatar/12.jpg",
          "ionButton": "Follow",
          "iconDelete": "trash",
          "delate": "Delete"
        },
        {
          "id": 5,
          "title": "Marina Vidal",
          "subtitle": "Lorem ipsum dolor sit amet, consectetur.",
          "image": "assets/imgs/avatar/13.jpg",
          "ionButton": "Follow",
          "iconDelete": "trash",
          "delate": "Delete"
        },
        {
          "id": 6,
          "title": "Sara Alcántarl",
          "subtitle": "Lorem ipsum dolor sit amet, consectetur",
          "image": "assets/imgs/avatar/14.jpg",
          "ionButton": "Follow",
          "iconDelete": "trash",
          "delate": "Delete"
        },
        {
          "id": 7,
          "title": "Gabriela Reyes",
          "subtitle": "Lorem ipsum dolor sit amet, consectetur",
          "image": "assets/imgs/avatar/15.jpg",
          "ionButton": "Follow",
          "iconDelete": "trash",
          "delate": "Delete"
        }
      ]
    }
  }

  //* Data Set for page 6
  getDataForLayout6 = (): any => {
    return {
      'toolbarTitle': 'FadeIn',
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
    }
  }

  //* Data Set for page 7
  getDataForLayout7 = (): any => {
    return {
      'toolbarTitle': 'BounceIn Right And ZoomIn',
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
    }
  }

  //* Data Set for page 8
  getDataForLayout8 = (): any => {
    return {
      'toolbarTitle': 'SlideIn Left',
      'allComments': '2121 Comments',
      'items': [
        {
          'id': 1,
          'image': 'assets/imgs/avatar/16.jpg',
          'title': 'Erica Romaguera',
          'time': '18 August 2018 at 12:20pm',
          'description': 'If you could have any kind of pet, what would you choose?'
        },
        {
          'id': 2,
          'image': 'assets/imgs/avatar/15.jpg',
          'title': 'Caleigh Jerde',
          'time': '18 August 2018 at 8:13pm',
          'description': 'If you could learn any language, what would you choose?'
        },
        {
          'id': 3,
          'image': 'assets/imgs/avatar/14.jpg',
          'title': 'Lucas Schultz',
          'time': '18 August 2018 at 5:22pm',
          'description': 'Life is about making an impact, not making an income.'
        },
        {
          'id': 4,
          'image': 'assets/imgs/avatar/13.jpg',
          'title': 'Carole Marvin',
          'time': '18 August 2018 at 7:36am',
          'description': `I\’ve learned that people will forget what you said,
                 people will forget what you did, but people will never forget how you made them feel`
        },
        {
          'id': 5,
          'image': 'assets/imgs/avatar/12.jpg',
          'title': 'Doriana Feeney',
          'time': '18 August 2018 at 5:28am',
          'description': 'Definiteness of purpose is the starting point of all achievement.'
        },
        {
          'id': 6,
          'image': 'assets/imgs/avatar/11.jpg',
          'title': 'Nia Gutkowski',
          'time': '18 August 2018 at 11:27pm',
          'description': 'Life is what happens to you while you’re busy making other plans'
        }
      ]
    }
  }

  //* Data Set for page 9
  getDataForLayout9 = (): any => {
    return {
      'toolbarTitle': 'SlideIn Up And ZoomIn',
      "image": "assets/imgs/avatar/24.jpg",
      "title": "Carolyn Guerrero",
      "subtitle": "Extreme coffee lover. Twitter maven. Internet practitioner. Beeraholic.",
      "category": "populary",
      "followers": "Followers",
      "valueFollowers": "439",
      "following": "Following",
      "valueFollowing": "297",
      "posts": "Posts",
      "valuePosts": "43",
      "follow": "Follow",
      "message": "Send message",
      "items": [
        {
          "id": 1,
          "category": "Fashion",
          "backgroundCard": "assets/imgs/background/21.jpg",
          "title": "Holly Willoughby and Mila Kunis are reigniting our love for double denim",
          "like": {
            "icon": "heart",
            "number": "4",
            "text": "Like",
            "isActive": false
          },
          "comment": {
            "icon": "chatbubbles",
            "number": "4",
            "text": "Comments",
          }
        },
        {
          "id": 2,
          "category": "Fashion",
          "backgroundCard": "assets/imgs/background/19.jpg",
          "title": "Your first look at the V&A's breathtaking Dior exhibition",
          "like": {
            "icon": "heart",
            "number": "4",
            "text": "Like",
            "isActive": false
          },
          "comment": {
            "icon": "chatbubbles",
            "number": "4",
            "text": "Comments",
          }
        },
        {
          "id": 3,
          "category": "Fashion",
          "backgroundCard": "assets/imgs/background/22.jpg",
          "title": "This is January's most searched-for dress style (and it's super flattering)",
          "like": {
            "icon": "heart",
            "number": "4",
            "text": "Like",
            "isActive": false
          },
          "comment": {
            "icon": "chatbubbles",
            "number": "4",
            "text": "Comments",
          }
        }
      ]
    }
  }

  //* Data Set for page 10
  getDataForLayout10 = (): any => {
    return {
      'toolbarTitle': 'FadeIn Right',
      "title": "Top Stories",
      "recommender": "Recommender",
      "shareIcon": "ellipsis-horizontal",
      "buttonSeeAll": "See All",
      "iconMore": "arrow-forward",
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
    }
  }

  load(item: any): Observable<any> {
    const that = this;
    that.loadingService.show();
    if (AppSettings.IS_FIREBASE_ENABLED) {
      return new Observable(observer => {
        this.af
          .object('animation/' + item.theme)
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
