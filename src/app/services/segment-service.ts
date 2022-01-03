import { IService } from './IService';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';
import { LoadingService } from './loading-service';

@Injectable({ providedIn: 'root' })
export class SegmentService implements IService {

  constructor(public af: AngularFireDatabase, private loadingService: LoadingService) { }

  getTitle = (): string => 'Segment';

  getAllThemes = (): Array<any> => {
    return [
      { 'url': 'segment/0', 'title': 'Segment List', 'theme': 'layout1' },
      { 'url': 'segment/1', 'title': 'Segment Card', 'theme': 'layout2' },
      { 'url': 'segment/2', 'title': 'Segment Post', 'theme': 'layout3' }
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
      'toolbarTitle': 'Segment List',
      "segmentButton1": "Profile",
      "segmentButton2": "New Product",
      "segmentButton3": "Most Sold Products",
      "segmentButton4": "Make Order",

      // Data Page 1
      "page1": {
        'toolbarTitle': 'Profile with Big Image',
        "headerImage": "assets/imgs/background/42.jpg",
        "image": "assets/imgs/avatar/12.jpg",
        "title": "Jennifer Reid",
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
        "items": [
          {
            "id": 1,
            "iconPhone": "call",
            "iconMail": "mail-open",
            "iconGlobe": "globe",
            "phone": "i598-968-5698987",
            "mail": "dev@csform.com",
            "globe": "csform.com",
            "content": "Content",
            "subtitle": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            "title": "About",
          }
        ]
      },

      // Data Page 2
      "page2": {
        "background": "assets/imgs/background/4.jpg",
        "items": [
          {
            "id": 1,
            "title": "Iphone 8",
            "description": "Lorem ipsum dolor sit amet",
            "image": "assets/imgs/avatar/1.jpg",
            "price": "$99.99"
          },
          {
            "id": 2,
            "title": "Keyboard",
            "description": "Lorem ipsum dolor sit amet",
            "image": "assets/imgs/avatar/2.jpg",
            "price": "$139.99"
          },
          {
            "id": 3,
            "title": "Canon Photoaparat",
            "description": "Lorem ipsum dolor sit amet",
            "image": "assets/imgs/avatar/3.jpg",
            "price": "$149.99"
          },
          {
            "id": 4,
            "title": "Headphones",
            "description": "Lorem ipsum dolor sit amet",
            "image": "assets/imgs/avatar/4.jpg",
            "price": "$19.99"
          },
          {
            "id": 5,
            "title": "Watch Black",
            "description": "Lorem ipsum dolor sit amet",
            "image": "assets/imgs/avatar/5.jpg",
            "price": "$199.99"
          }
        ]
      },
      // Data Page 3
      "page3": {
        "background": "assets/imgs/background/14.jpg",
        "items": [
          {
            "id": 1,
            "title": "Dualshock controller",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "image": "assets/imgs/avatar/0.jpg",
          },
          {
            "id": 2,
            "title": "Camera",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "image": "assets/imgs/avatar/8.jpg",
          },
          {
            "id": 3,
            "title": "50mm",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "image": "assets/imgs/avatar/7.jpg",
          },
          {
            "id": 4,
            "title": "Watch",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "image": "assets/imgs/avatar/6.jpg",
          },
          {
            "id": 5,
            "title": "Canon Photoaparat",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "image": "assets/imgs/avatar/5.jpg",
          }
        ]
      },
      // Data Page 4
      "page4": {
        "title": "Make order now!",
        "subtitle": "Reorder list by your wish.",
        "button": "Get",
        "items": [
          {
            "id": 1,
            "title": "Photoaparat",
            "subtitle": "20% Off",
            "image": "assets/imgs/avatar/5.jpg",
            "price": "$199.99"
          },
          {
            "id": 2,
            "title": "Objective",
            "subtitle": "15% Off",
            "image": "assets/imgs/avatar/7.jpg",
            "price": "$295.99"
          },
          {
            "id": 3,
            "title": "Nikon Photoaparat",
            "subtitle": "22% Off",
            "image": "assets/imgs/avatar/8.jpg",
            "price": "$1032.99"
          },
          {
            "id": 4,
            "title": "iPhone 8",
            "subtitle": "10% Off",
            "image": "assets/imgs/avatar/9.jpg",
            "price": "$1269.99"
          },
          {
            "id": 5,
            "title": "iPhone 7",
            "subtitle": "12% Off",
            "image": "assets/imgs/avatar/1.jpg",
            "price": "$34.99"
          },
          {
            "id": 6,
            "title": "Dualshock controller",
            "subtitle": "14% Off",
            "image": "assets/imgs/avatar/0.jpg",
            "price": "$499.99"
          },
        ]
      }
    };
  }

  //* Data Set for page 2
  getDataForLayout2 = (): any => {
    return {
      'toolbarTitle': 'Segment Card',
      "segmentButton1": "Profile",
      "segmentButton2": "Graphic Designe",
      "segmentButton3": "Designe Art",
      "segmentButton4": "Designe & Art",
      "segmentButton5": "About Us",

      // Data Page 1
      "page1": {
        "image": "assets/imgs/avatar/22.jpg",
        "title": "Carolyn Guerrero",
        "subtitle": "Extreme coffee lover. Twitter maven. Internet practitioner. Beeraholic.",
        "follow": "Follow",
        "message": "Contact",
        "followers": "Followers",
        "valueFollowers": "439",
        "following": "Following",
        "valueFollowing": "297",
        "posts": "Posts",
        "valuePosts": "43",
        "category": "populary",
        "items": [
          {
            "id": 1,
            "category": "Prisma Labs",
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
              "isActive": false
            }
          },
          {
            "id": 2,
            "category": "Apple watch",
            "title": "Built with your heart in mind",
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
              "isActive": false
            }
          },
          {
            "id": 3,
            "category": "Interior design trends",
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
              "isActive": false
            }
          }
        ]
      },
      // Data Page 2
      "page2": {
        "items": [
          {
            "id": 1,
            "avatar": "assets/imgs/avatar/12.jpg",
            "avatarName": "Will Marvin",
            "image": "assets/imgs/background/1.jpg",
            "title": "Liberate Your Creativity",
            "category": "Graphic Designe",
            "description": "FOur Graphic Designer templates empower you to design like never before. Liberate yourself...",
          },
          {
            "id": 2,
            "avatar": "assets/imgs/avatar/13.jpg",
            "avatarName": "Adeline O'Reillys",
            "image": "assets/imgs/background/2.jpg",
            "title": "Revolutionary Design",
            "category": "Graphic Designe",
            "description": "The innovative BeFunky Graphic Designer Toolset makes it simple to design however you want..",
          },
          {
            "id": 3,
            "avatar": "assets/imgs/avatar/14.jpg",
            "avatarName": "Genoveva Leannon",
            "image": "assets/imgs/background/0.jpg",
            "title": "Freedom To Create",
            "category": "Graphic Designe",
            "description": "Our partnership with Pixabay provides the support you need to declare independence from pricey…",
          },
          {
            "id": 4,
            "avatar": "assets/imgs/avatar/15.jpg",
            "avatarName": "Eulalia Daugherty",
            "image": "assets/imgs/background/7.jpg",
            "title": "What Is Graphic Design?",
            "category": "Graphic Designe",
            "description": "Graphic design is the art of visual communication through the use of text, photos, and ill...",
          }
        ]
      },

      // Data Page 3
      "page3": {
        "items": [
          {
            "id": 1,
            "image": "assets/imgs/background/9.jpg",
            "title": "Visual identity graphic design",
            "category": "Graphic Design",
            "description": " brand is a relationship between a business or organization and its audience.",
          },
          {
            "id": 2,
            "image": "assets/imgs/background/7.jpg",
            "title": "Marketing & advertising design",
            "category": "Graphic Design",
            "description": "When most people think of graphic design, they think of designs created for marketing and advertising.",
          },
          {
            "id": 3,
            "image": "assets/imgs/background/8.jpg",
            "title": "User interface graphic design",
            "category": "Graphic Design",
            "description": "A user interface (UI) is how a user interacts with a device or application. UI design is the process of...",
          },
          {
            "id": 4,
            "image": "assets/imgs/background/9.jpg",
            "title": "Publication graphic design",
            "category": "Graphic Design",
            "description": "Publications are long-form pieces that communicate with an audience through public distribution. ",
          },
          {
            "id": 5,
            "image": "assets/imgs/background/1.jpg",
            "title": "Packaging graphic design",
            "category": "Graphic Design",
            "description": "Most products require some form of packaging to protect and prepare them for storage, distribution, and sale",
          }
        ]
      },

      // Data Page 4
      "page4": {
        "items": [
          {
            "id": 1,
            "avatar": "assets/imgs/avatar/12.jpg",
            "avatarName": "Will Marvin",
            "image": "assets/imgs/background/1.jpg",
            "title": "Liberate Your Creativity",
            "description": "FOur Graphic Designer templates empower you to design like never before. Liberate yourself...",
          },
          {
            "id": 2,
            "avatar": "assets/imgs/avatar/13.jpg",
            "avatarName": "Adeline O'Reillys",
            "image": "assets/imgs/background/2.jpg",
            "title": "Revolutionary Design",
            "description": "The innovative BeFunky Graphic Designer Toolset makes it simple to design however you want..",
          },
          {
            "id": 3,
            "avatar": "assets/imgs/avatar/14.jpg",
            "avatarName": "Genoveva Leannon",
            "image": "assets/imgs/background/0.jpg",
            "title": "Freedom To Create",
            "description": "Our partnership with Pixabay provides the support you need to declare independence from pricey…",
          },
          {
            "id": 4,
            "avatar": "assets/imgs/avatar/15.jpg",
            "avatarName": "Eulalia Daugherty",
            "image": "assets/imgs/background/7.jpg",
            "title": "What Is Graphic Design?",
            "description": "Graphic design is the art of visual communication through the use of text, photos, and ill...",
          }
        ]
      },

      // Data Page 5
      "page5": {
        'toolbarTitle': 'GMAPS + About Us',
        'title': 'Creative Studio Form',
        'titleDescription': 'Design & Development agency',
        'contentTitle': 'About us',
        'contentDescription': `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Luctus semper elit platea; Velit aptent euismod pede euismod facilisis? In ultrices venenatis mauris.
               Consequat gravida pretium ligula lectus;
                Lacus natoque elit elit: Imperdiet cursus fermentum suspendisse; Cum iaculis venenatis!`,
        'iconLoacation': 'icon-map-marker-radius',
        'iconLoacationText': 'Design Street, New York, USA',
        'iconWatch': 'icon-alarm',
        'iconWatchText': '8:00 to 16:00 working days',
        'iconPhone': 'icon-phone',
        'iconPhoneText': '333 222 111',
        'iconEarth': 'icon-earth',
        'iconEarthText': 'www.csform.com',
        'iconEmail': 'icon-email-outline',
        'iconEmailText': 'dev@csform.com',
        'titleMap': 'Here we are :',
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
      }
    };
  }

  //* Data Set for page 3
  getDataForLayout3 = (): any => {
    return {
      'toolbarTitle': 'Segment Post',
      "segmentButton1": "Profile",
      "segmentButton2": "New Post",
      "segmentButton3": "Old Post",
      // Data Page 1
      "page1": {
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
        "items": [
          {
            "id": 1,
            "category": "architecture",
            "backgroundCard": "assets/imgs/background/38.jpg",
            "title": "Sea bridge opens between hong kong and china",
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
              "isActive": false
            }
          },
          {
            "id": 2,
            "category": "architecture",
            "backgroundCard": "assets/imgs/background/25.jpg",
            "title": "The World's longest sea crossing opens",
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
              "isActive": false
            }
          },
          {
            "id": 3,
            "category": "architecture",
            "backgroundCard": "assets/imgs/background/5.jpg",
            "title": "The 'bank of africa tower' will be tallest",
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
              "isActive": false
            }
          }
        ]
      },

      // Data Page 2
      "page2": {
        "title": "New Today",
        "buttonSeeAll": "See all",
        "items": [
          {
            "id": 1,
            "image": "assets/imgs/background/21.jpg",
            "time": "09 May 2018",
            "title": "Photo Editor",
            "description": "This free iPhone App boasts 120 million users and picked up Apple's App...",
          },
          {
            "id": 2,
            "image": "assets/imgs/background/22.jpg",
            "time": "08 July 2018",
            "title": "Muted beauty",
            "description": "Muted colours – off whites, beiges, light browns and lighte...",
          },
          {
            "id": 3,
            "image": "assets/imgs/background/16.jpg",
            "time": "11 September 2018",
            "title": "Butterfly Amour",
            "description": "Butterflies may be a symbol of femininity, but that no longer means..",
          },
          {
            "id": 4,
            "image": "assets/imgs/background/19.jpg",
            "time": "23 July 2018",
            "title": "Moody moments",
            "description": "To bring anything into your life, imagine that it’s already there. – Richard Bach",
          },
          {
            "id": 5,
            "image": "assets/imgs/background/12.jpg",
            "time": "05 June 2018",
            "title": "Romantic masters",
            "description": "Speaking of romance, the bedroom in 2017 is all about romance. ",
          }
        ],
        "slider": [
          {
            "id": 1,
            "image": "assets/imgs/background/29.jpg",
            "title": "Free Ride Tour",
            "subtitle": "Best Offer",
            "iconLike": "heart",
            "like": "12",
            "iconComment": "chatbubbles",
            "comment": "16",
          },
          {
            "id": 2,
            "image": "assets/imgs/background/30.jpg",
            "title": "Main Stage Event",
            "subtitle": "Main Event",
            "iconLike": "heart",
            "like": "12",
            "iconComment": "chatbubbles",
            "comment": "16",
          },
          {
            "id": 3,
            "image": "assets/imgs/background/31.jpg",
            "title": "Bridge Tour",
            "subtitle": "Mountain",
            "iconLike": "heart",
            "like": "12",
            "iconComment": "chatbubbles",
            "comment": "16",
          },
          {
            "id": 4,
            "image": "assets/imgs/background/32.jpg",
            "title": "Free Ride Tour",
            "subtitle": "Best Tourt",
            "iconLike": "heart",
            "like": "12",
            "iconComment": "chatbubbles",
            "comment": "16",
          },
          {
            "id": 5,
            "image": "assets/imgs/background/25.jpg",
            "title": "Mountain Trout",
            "subtitle": "Mountain",
            "iconLike": "heart",
            "like": "12",
            "iconComment": "chatbubbles",
            "comment": "16",
          },
          {
            "id": 6,
            "image": "assets/imgs/background/10.jpg",
            "title": "Sea ture",
            "subtitle": "Bridge Tour",
            "iconLike": "heart",
            "like": "12",
            "iconComment": "chatbubbles",
            "comment": "16",
          },
          {
            "id": 7,
            "image": "assets/imgs/background/11.jpg",
            "title": "Free Ride Tour",
            "subtitle": "Best Events",
            "iconLike": "heart",
            "like": "12",
            "iconComment": "chatbubbles",
            "comment": "16",
          },
          {
            "id": 8,
            "image": "assets/imgs/background/5.jpg",
            "title": "Mountain Trout",
            "subtitle": "Mountain",
            "iconLike": "heart",
            "like": "12",
            "iconComment": "chatbubbles",
            "comment": "16",
          },
          {
            "id": 9,
            "image": "assets/imgs/background/25.jpg",
            "title": "Sea ture",
            "subtitle": "Best Events",
            "iconLike": "heart",
            "like": "12",
            "iconComment": "chatbubbles",
            "comment": "16",
          },
          {
            "id": 10,
            "image": "assets/imgs/background/24.jpg",
            "title": "Free Ride Tour",
            "subtitle": "Main Event",
            "iconLike": "heart",
            "like": "12",
            "iconComment": "chatbubbles",
            "comment": "16",
          }
        ]
      },
      // Data Page 3
      "page3": {
        "items": [
          {
            "id": 1,
            "title": "Free Ride",
            "backgroundImage": "assets/imgs/background/25.jpg",
            "description": "Cras odio felis, blandit sit amet mi nec, euismod mattis tellus."
          },
          {
            "id": 2,
            "title": "Bridge Tour",
            "backgroundImage": "assets/imgs/background/38.jpg",
            "description": "Cras odio felis, blandit sit amet mi nec, euismod mattis tellus."
          },
          {
            "id": 3,
            "title": "Sea Tour",
            "backgroundImage": "assets/imgs/background/31.jpg",
            "description": "Cras odio felis, blandit sit amet mi nec, euismod mattis tellus."
          },
          {
            "id": 4,
            "title": "Main Stage Event",
            "backgroundImage": "assets/imgs/background/32.jpg",
            "description": "Cras odio felis, blandit sit amet mi nec, euismod mattis tellus."
          },
          {
            "id": 5,
            "title": "Classic Open Air",
            "backgroundImage": "assets/imgs/background/23.jpg",
            "description": "Cras odio felis, blandit sit amet mi nec, euismod mattis tellus."
          },
          {
            "id": 6,
            "title": "Concert Summer",
            "backgroundImage": "assets/imgs/background/24.jpg",
            "description": "LCras odio felis, blandit sit amet mi nec, euismod mattis tellus."
          },
          {
            "id": 7,
            "title": "Open Air Concerts",
            "backgroundImage": "assets/imgs/background/27.jpg",
            "description": "Cras odio felis, blandit sit amet mi nec, euismod mattis tellus.."
          }
        ]
      },
    };
  }

  load(item: any): Observable<any> {
    this.loadingService.show();
    if (AppSettings.IS_FIREBASE_ENABLED) {
      return new Observable(observer => {
        this.af
          .object('segment/' + item.theme)
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
