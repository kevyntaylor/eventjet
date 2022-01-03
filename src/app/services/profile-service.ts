import { IService } from './IService';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';
import { ToastService } from './toast-service';
import { LoadingService } from './loading-service';

@Injectable({ providedIn: 'root' })
export class ProfileService implements IService {

  constructor(public af: AngularFireDatabase, private loadingService: LoadingService, private toastCtrl: ToastService) { }

  getTitle = (): string => 'Profile';

  getAllThemes = (): Array<any> => {
    return [
      { 'url': 'profile/0', 'title': 'Profile With Avatar', 'theme': 'layout1' },
      { 'url': 'profile/1', 'title': 'Profile with Slider + Comments', 'theme': 'layout2' },
      { 'url': 'profile/2', 'title': 'Profile Basic', 'theme': 'layout3' },
      { 'url': 'profile/3', 'title': 'Profile with Slider', 'theme': 'layout4' },
      { 'url': 'profile/4', 'title': 'Profile with Big Image', 'theme': 'layout5' }
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
      'toolbarTitle': 'Profile With Avatar',
      "image": "assets/imgs/avatar/20.jpg",
      "title": "Samantha Kennedy",
      "subtitle": "Extreme coffee lover. Twitter maven. Internet practitioner. Beeraholic.",
      "category": "populary",
      "follow": "Follow",
      "message": "Contact",
      "items": [
        {
          "id": 1,
          "category": "Engineering News",
          "title": "Small flying robots haul heavy loads",
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
          "category": "Bioengineering News",
          "title": "Creating custom brains from the ground up",
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
          "category": "Energy and Resources News",
          "title": "3D-printed lithium-ion batteries",
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
    };
  }

  //* Data Set for page 2
  getDataForLayout2 = (): any => {
    return {
      'toolbarTitle': 'Profile with Slider + Comments',
      "image": "assets/imgs/avatar/22.jpg",
      "background": "assets/imgs/background/9.jpg",
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
          "category": "Engineering News",
          "title": "New definition returns meaning to information",
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
          "category": "Science News",
          "title": "Investigating glaciers in depth",
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
          "category": "Science News",
          "title": "Nanodiamonds as photocatalysts",
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
    };
  }

  //* Data Set for page 3
  getDataForLayout3 = (): any => {
    return {
      'toolbarTitle': 'Profile Basic',
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
    };
  }

  //* Data Set for page 4
  getDataForLayout4 = (): any => {
    return {
      'toolbarTitle': 'Profile with Slider',
      "image": "assets/imgs/avatar/22.jpg",
      "title": "Carolyn Guerrero",
      "subtitle": "Extreme coffee lover. Twitter maven. Internet practitioner. Beeraholic.",
      "category": "populary",
      "followers": "Followers",
      "valueFollowers": "439",
      "following": "Following",
      "valueFollowing": "297",
      "posts": "Posts",
      "valuePosts": "43",
      "items": [
        {
          "id": 1,
          "category": "Prisma Labs",
          "backgroundCard": "assets/imgs/background/4.jpg",
          "title": "Prisma Photo Editor",
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
          "category": "Apple watch",
          "backgroundCard": "assets/imgs/background/3.jpg",
          "title": "Built with your heart in minds",
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
          "category": "Interior design trends",
          "backgroundCard": "assets/imgs/background/14.jpg",
          "title": "Work It Baby: 14 Interior Design",
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
    };
  }

  //* Data Set for page 5
  getDataForLayout5 = (): any => {
    return {
      'toolbarTitle': 'Profile with Big Image',
      "headerImage": "assets/imgs/background/35.jpg",
      "image": "assets/imgs/avatar/12.jpg",
      "title": "Jennifer Reid",
      "address": "New York, NY",
      "subtitle": "Extreme coffee lover. Twitter maven. Internet practitioner. Beeraholic.",
      "category": "populary",
      "followers": "Followers",
      "valueFollowers": "439",
      "following": "Following",
      "valueFollowing": "297",
      "posts": "Posts",
      "valuePosts": "43",
      "logoFacebook": "logo-facebook",
      "logoTwitter": "logo-twitter",
      "logoInstagram": "logo-instagram",
      "listFriends": "Friends",
      "activeFriends": "16 Active",
      "shots": "Shots",
      "addimgs": "6 imgs taken this week",
      "buttonContact": "Contact Jennifer Reld",
      "autorInfo": [
        {
          "id": 1,
          "subtitle": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          "title": "About",
          "buttonReadMore": "Read more",
          "iconMore": "chevron-down",
          "expandItems": [
            {
              "id": 1,
              "iconPhone": "call",
              "iconMail": "mail-open",
              "iconGlobe": "globe",
              "phone": "i598-968-5698987",
              "mail": "dev@csform.com",
              "globe": "csform.com",
              "content": "Content",
            },
          ]
        },
      ],
      "friends": [
        {
          "id": 1,
          "image": "assets/imgs/avatar/24.jpg",
          "title": "Theresa"
        },
        {
          "id": 2,
          "image": "assets/imgs/avatar/10.jpg",
          "title": "Samantha"
        },
        {
          "id": 3,
          "image": "assets/imgs/avatar/11.jpg",
          "title": "Alice"
        },
        {
          "id": 4,
          "image": "assets/imgs/avatar/12.jpg",
          "title": "Caitlin"
        },
        {
          "id": 5,
          "image": "assets/imgs/avatar/13.jpg",
          "title": "Daisy"
        },
        {
          "id": 6,
          "image": "assets/imgs/avatar/14.jpg",
          "title": "Stacey"
        },
        {
          "id": 7,
          "image": "assets/imgs/avatar/15.jpg",
          "title": "Jennifer"
        },
        {
          "id": 8,
          "image": "assets/imgs/avatar/16.jpg",
          "title": "Anna"
        },
        {
          "id": 9,
          "image": "assets/imgs/avatar/17.jpg",
          "title": "Jane"
        },
        {
          "id": 10,
          "image": "assets/imgs/avatar/18.jpg",
          "title": "Victoria"
        },
        {
          "id": 11,
          "image": "assets/imgs/avatar/19.jpg",
          "title": "Katie"
        },
        {
          "id": 12,
          "image": "assets/imgs/avatar/20.jpg",
          "title": "Matilda"
        },
        {
          "id": 13,
          "image": "assets/imgs/avatar/21.jpg",
          "title": "Ray"
        },
        {
          "id": 14,
          "image": "assets/imgs/avatar/22.jpg",
          "title": "Katie"
        },
        {
          "id": 15,
          "image": "assets/imgs/avatar/23.jpg",
          "title": "Ella"
        },
        {
          "id": 16,
          "image": "assets/imgs/avatar/24.jpg",
          "title": "Karl"
        },
      ],

      "imgs": [
        {
          "id": 1,
          "image": "assets/imgs/background/29.jpg",
        },
        {
          "id": 2,
          "image": "assets/imgs/background/30.jpg",
        },
        {
          "id": 3,
          "image": "assets/imgs/background/31.jpg",
        },
        {
          "id": 4,
          "image": "assets/imgs/background/32.jpg",
        },
        {
          "id": 5,
          "image": "assets/imgs/background/37.jpg",
        },
        {
          "id": 6,
          "image": "assets/imgs/background/27.jpg",
        },
      ]
    };
  }

  load(item: any): Observable<any> {
    this.loadingService.show();
    if (AppSettings.IS_FIREBASE_ENABLED) {
      return new Observable(observer => {
        this.af
          .object('profile/' + item.theme)
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
