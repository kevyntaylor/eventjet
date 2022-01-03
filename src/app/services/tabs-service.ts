import { ValidationService } from './validation';
import { IService } from './IService';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';
import { LoadingService } from './loading-service';

@Injectable({ providedIn: 'root' })
export class TabsService implements IService {

  constructor(public af: AngularFireDatabase, private loadingService: LoadingService) { }

  getTitle = (): string => 'Tabs';

  getAllThemes = (): Array<any> => {
    return [
      { 'url': 'tab/0/tab/tab1', 'title': 'Footer tab - text', 'theme': 'layout1' },
      { 'url': 'tab/1/tab/tab4', 'title': 'Footer tab - icons', 'theme': 'layout2' },
      { 'url': 'tab/2/tab/tab7', 'title': 'Header tab - text', 'theme': 'layout3' }
    ];
  }

  getDataForTheme = (menuItem: any): any => {
    return this[
      'getDataFor' +
      menuItem.charAt(0).toUpperCase() +
      menuItem.slice(1)
    ]();
  }

  //* Data Set for page 1
  getDataForTab1 = (): any => {
    return {
      "headerImage": "assets/imgs/background/21.jpg",
      "avatar": "assets/imgs/avatar/14.jpg",
      "title": "Jessica White",
      "subtitle": "47 Holmes Green, Sophiebury, WP9M 3ZZ",
      "description": "Extreme coffee lover. Twitter maven. Internet practitioner. Beeraholic.",
      "follow": "follow",
      "massage": "massage",
      "listFriends": "Friends",
      "namberFriends": "347 Friends",
      "buttonSeeAll": "See all friends",
      "gallery": "Gallery",
      "namberImages": "750 images",
      "buttonSeeAllImages": "See all images",
      "timeline": "Timeline",
      "friends": [
        {
          "id": 1,
          "image": "assets/imgs/avatar/24.jpg",
          "title": "Grant Marshall"
        },
        {
          "id": 2,
          "image": "assets/imgs/avatar/10.jpg",
          "title": "Pena Valdez"
        },
        {
          "id": 3,
          "image": "assets/imgs/avatar/11.jpg",
          "title": "Jessica Miles"
        },
        {
          "id": 4,
          "image": "assets/imgs/avatar/12.jpg",
          "title": "Kerri Barber"
        },
        {
          "id": 5,
          "image": "assets/imgs/avatar/13.jpg",
          "title": "Natasha Gamble"
        },
        {
          "id": 6,
          "image": "assets/imgs/avatar/14.jpg",
          "title": "Carol Petersen"
        },
        {
          "id": 7,
          "image": "assets/imgs/avatar/15.jpg",
          "title": "Julia Petersen"
        },
        {
          "id": 8,
          "image": "assets/imgs/avatar/16.jpg",
          "title": "Marisa Cain"
        }
      ],
      "fullGallery": [
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
        }
      ],
      "items": [
        {
          "id": 1,
          "avatar": "assets/imgs/avatar/24.jpg",
          "title": "Neil Roberts",
          "subtitle": "neil@gmail.com",
          "time": "15min ago",
          "image": "assets/imgs/background/19.jpg",
          "cardTitle": "Paris",
          "description": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
          "iconLike": "heart",
          "iconComment": "chatbubbles",
          "numberLike": "12",
          "numberCommnet": "31",

        },
        {
          "id": 2,
          "avatar": "assets/imgs/avatar/11.jpg",
          "title": "Samantha Keny",
          "subtitle": "sam@gmail.com",
          "time": "18min ago",
          "image": "assets/imgs/background/27.jpg",
          "cardTitle": "Moscow",
          "description": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
          "iconLike": "heart",
          "iconComment": "chatbubbles",
          "numberLike": "55",
          "numberCommnet": "33",
        },
        {
          "id": 3,
          "avatar": "assets/imgs/avatar/12.jpg",
          "title": "Liam Hughes",
          "subtitle": "liam@gmail.com",
          "time": "20min ago",
          "image": "assets/imgs/background/24.jpg",
          "cardTitle": "London",
          "description": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
          "iconLike": "heart",
          "iconComment": "chatbubbles",
          "numberLike": "12",
          "numberCommnet": "14",
        },
        {
          "id": 4,
          "avatar": "assets/imgs/avatar/13.jpg",
          "title": "Caitlin Wilkinson",
          "subtitle": "caitlin@gmail.com",
          "time": "21min ago",
          "image": "assets/imgs/background/23.jpg",
          "cardTitle": "Berlin",
          "description": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
          "iconLike": "heart",
          "iconComment": "chatbubbles",
          "numberLike": "123 ",
          "numberCommnet": "41 Comments",
        }
      ]
    };
  }

  //* Data Set for page 2
  getDataForTab2 = (): any => {
    return {
      'headerTitle': "List Frends",
      "items": [
        {
          "title": "Isabel Villar",
          "subtitle": "@isabel.villar",
          "follow": "follow",
          "avatar": "assets/imgs/avatar/17.jpg",
        },
        {
          "title": "Silvia Salvador",
          "subtitle": "@silvia.salvador",
          "follow": "follow",
          "avatar": "assets/imgs/avatar/16.jpg",
        },
        {
          "title": "Marguerite Thibault",
          "subtitle": "@marguerite.thib",
          "follow": "follow",
          "avatar": "assets/imgs/avatar/15.jpg",
        },
        {
          "title": "Marianne Maillet",
          "subtitle": "@marianne.maillet",
          "follow": "follow",
          "avatar": "assets/imgs/avatar/14.jpg",
        },
        {
          "title": "Julie Martins",
          "subtitle": "@julie.martins",
          "follow": "follow",
          "avatar": "assets/imgs/avatar/13.jpg",
        },
        {
          "title": "Sofia Zepeda",
          "subtitle": "@sofia.zepeda",
          "follow": "follow",
          "avatar": "assets/imgs/avatar/12.jpg",
        },
        {
          "title": "Nathalie Voisin",
          "subtitle": "@nathalie.voisin",
          "follow": "follow",
          "avatar": "assets/imgs/avatar/11.jpg",
        }
      ]
    };
  }

  //* Data Set for page 3
  getDataForTab3 = (): any => {
    return {
      "rating": "4.5",
      "iconsStars": [
        {
          "iconStar": "star",
        },
        {
          "iconStar": "star",
        },
        {
          "iconStar": "star",
        },
        {
          "iconStar": "star",
        },
        {
          "iconStar": "star-outline",
        }
      ],
      "items": [
        {
          "id": 1,
          "title": "Erica Romaguera",
          "time": "18 August 2018",
          "description": "If you could have any kind of pet, what would you choose?",
          "iconsStars": [
            {
              "iconStar": "star",
            },
            {
              "iconStar": "star",
            },
            {
              "iconStar": "star",
            },
            {
              "iconStar": "star-outline",
            },
            {
              "iconStar": "star-outline",
            }
          ],
        },
        {
          "id": 2,
          "title": "Caleigh Jerde",
          "time": "18 August 2018",
          "description": "If you could learn any language, what would you choose?",
          "iconsStars": [
            {
              "iconStar": "star",
            },
            {
              "iconStar": "star",
            },
            {
              "iconStar": "star-outline",
            },
            {
              "iconStar": "star-outline",
            },
            {
              "iconStar": "star-outline",
            }
          ],
        },
        {
          "id": 3,
          "title": "Lucas Schultz",
          "time": "18 August 2018",
          "description": "Life is about making an impact, not making an income.",
          "iconsStars": [
            {
              "iconStar": "star",
            },
            {
              "iconStar": "star",
            },
            {
              "iconStar": "star",
            },
            {
              "iconStar": "star",
            },
            {
              "iconStar": "star-outline",
            }
          ],
        },
        {
          "id": 4,
          "title": "Carole Marvin",
          "time": "18 August 2018",
          "description": "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel",
          "iconsStars": [
            {
              "iconStar": "star",
            },
            {
              "iconStar": "star",
            },
            {
              "iconStar": "star",
            },
            {
              "iconStar": "star",
            },
            {
              "iconStar": "star",
            }
          ],
        },
        {
          "id": 5,
          "title": "Doriana Feeney",
          "time": "18 August 2018",
          "description": "Definiteness of purpose is the starting point of all achievement.",
          "iconsStars": [
            {
              "iconStar": "star",
            },
            {
              "iconStar": "star",
            },
            {
              "iconStar": "star",
            },
            {
              "iconStar": "star",
            },
            {
              "iconStar": "star-outline",
            }
          ],
        },
        {
          "id": 6,
          "title": "Nia Gutkowski",
          "time": "18 August 2018",
          "description": "Life is what happens to you while you’re busy making other plans",
          "iconsStars": [
            {
              "iconStar": "star",
            },
            {
              "iconStar": "star",
            },
            {
              "iconStar": "star",
            },
            {
              "iconStar": "star",
            },
            {
              "iconStar": "star-outline",
            }
          ],
        }
      ]
    };
  }

  //* Data Set for page 4
  getDataForTab4 = (): any => {
    return {
      "items": [
        {
          "id": 1,
          "icon": "chevron-forward-circle",
          "iconText": "Watch now",
          "title": "Lorem ipsum dolor sitamet",
          "description": "Contrary to popular belief, Lorem Ipsum is not simply random text.",
          "image": "assets/imgs/background/8.jpg",
          "reviews": "4.12 (78 reviews)",
          "ratingStar": {
            "iconsStars": [
              {
                "isActive": true,
                "iconActive": "icon-star",
                "iconInactive": "icon-star-outline"
              },
              {
                "isActive": true,
                "iconActive": "icon-star",
                "iconInactive": "icon-star-outline"
              },
              {
                "isActive": true,
                "iconActive": "icon-star",
                "iconInactive": "icon-star-outline"
              },
              {
                "isActive": true,
                "iconActive": "icon-star",
                "iconInactive": "icon-star-outline"
              },
              {
                "isActive": false,
                "iconActive": "icon-star",
                "iconInactive": "icon-star-outline"
              }
            ],
          }
        },
        {
          "id": 2,
          "icon": "chevron-forward-circle",
          "iconText": "Watch now",
          "title": "Lorem ipsum dolor sitamet",
          "description": "Contrary to popular belief, Lorem Ipsum is not simply random text.",
          "image": "assets/imgs/background/9.jpg",
          "reviews": "4.12 (78 reviews)",
          "ratingStar": {
            "iconsStars": [
              {
                "isActive": true,
                "iconActive": "icon-star",
                "iconInactive": "icon-star-outline"
              },
              {
                "isActive": true,
                "iconActive": "icon-star",
                "iconInactive": "icon-star-outline"
              },
              {
                "isActive": true,
                "iconActive": "icon-star",
                "iconInactive": "icon-star-outline"
              },
              {
                "isActive": true,
                "iconActive": "icon-star",
                "iconInactive": "icon-star-outline"
              },
              {
                "isActive": false,
                "iconActive": "icon-star",
                "iconInactive": "icon-star-outline"
              }
            ],
          }
        },
        {
          "id": 3,
          "icon": "chevron-forward-circle",
          "iconText": "Watch now",
          "title": "Lorem ipsum dolor sitamet",
          "description": "Contrary to popular belief, Lorem Ipsum is not simply random text.",
          "image": "assets/imgs/background/7.jpg",
          "reviews": "4.12 (78 reviews)",
          "ratingStar": {
            "iconsStars": [
              {
                "isActive": true,
                "iconActive": "icon-star",
                "iconInactive": "icon-star-outline"
              },
              {
                "isActive": true,
                "iconActive": "icon-star",
                "iconInactive": "icon-star-outline"
              },
              {
                "isActive": true,
                "iconActive": "icon-star",
                "iconInactive": "icon-star-outline"
              },
              {
                "isActive": true,
                "iconActive": "icon-star",
                "iconInactive": "icon-star-outline"
              },
              {
                "isActive": false,
                "iconActive": "icon-star",
                "iconInactive": "icon-star-outline"
              }
            ],
          }
        },
        {
          "id": 4,
          "icon": "chevron-forward-circle",
          "iconText": "Watch now",
          "title": "Lorem ipsum dolor sitamet",
          "description": "Contrary to popular belief, Lorem Ipsum is not simply random text.",
          "image": "assets/imgs/background/2.jpg",
          "reviews": "4.12 (78 reviews)",
          "ratingStar": {
            "iconsStars": [
              {
                "isActive": true,
                "iconActive": "icon-star",
                "iconInactive": "icon-star-outline"
              },
              {
                "isActive": true,
                "iconActive": "icon-star",
                "iconInactive": "icon-star-outline"
              },
              {
                "isActive": true,
                "iconActive": "icon-star",
                "iconInactive": "icon-star-outline"
              },
              {
                "isActive": true,
                "iconActive": "icon-star",
                "iconInactive": "icon-star-outline"
              },
              {
                "isActive": false,
                "iconActive": "icon-star",
                "iconInactive": "icon-star-outline"
              }
            ],
          }
        },
        {
          "id": 5,
          "icon": "chevron-forward-circle",
          "iconText": "Watch now",
          "title": "Lorem ipsum dolor sitamet",
          "description": "Contrary to popular belief, Lorem Ipsum is not simply random text.",
          "image": "assets/imgs/background/0.jpg",
          "reviews": "4.12 (78 reviews)",
          "ratingStar": {
            "iconsStars": [
              {
                "isActive": true,
                "iconActive": "icon-star",
                "iconInactive": "icon-star-outline"
              },
              {
                "isActive": true,
                "iconActive": "icon-star",
                "iconInactive": "icon-star-outline"
              },
              {
                "isActive": true,
                "iconActive": "icon-star",
                "iconInactive": "icon-star-outline"
              },
              {
                "isActive": true,
                "iconActive": "icon-star",
                "iconInactive": "icon-star-outline"
              },
              {
                "isActive": false,
                "iconActive": "icon-star",
                "iconInactive": "icon-star-outline"
              }
            ],
          }
        }
      ]
    };
  }

  //* Data Set for page 5
  getDataForTab5 = (): any => {
    return {
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
          'description': `I’ve learned that people will forget what you said,
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
    };
  }

  //* Data Set for page 6
  getDataForTab6 = (): any => {
    return {
      'yourName': 'Your Name',
      'title': 'Title',
      'description': 'Enter a description',
      'button': ' Write Comment'
    };
  }

  //* Data Set for page 7
  getDataForTab7 = (): any => {
    return {
      'headerImage': 'assets/imgs/background/21.jpg',
      'image': 'assets/imgs/background/20.jpg',
      'title': 'Infinit pontem in Sinis',
      'subtitle': 'per marescalluml',
      'category': 'Category',
      'avatar': 'assets/imgs/avatar/13.jpg',
      'shareIcon': 'ellipsis-horizontal',
      "iconLike": "heart",
      "textLike": "Like",
      "iconComments": "chatbubbles",
      "textComments": "Comments",
      'actionSheet': {
        'buttons': [
          {
            'text': 'Add to Cart',
            'role': 'destructive'
          },
          {
            'text': 'Add to Favorites'
          },
          {
            'text': 'Read more info'
          },
          {
            'text': 'Delete Item'
          },
          {
            'text': 'Cancel',
            'role': 'cancel'
          }
        ]
      },
      'subtitle1': "Hoc est, visu nova thriller, posuit orbem in fimbriis modern arte, quae est tenebrosa, haunting, torta - vertit se et in suo modo. Non quod objective, et arte discipulus apud Notingham, nuper Jack quae ducitur 'diluvium, ' frigus, saeva enfant inexpugnabiles omnes modern art. Et vadit ad deversorium cubiculum vult bibere et cetera id exuendum statum tunc illa e somno evigilans in lecto suo.",
      'subtitle2': 'Percussas pavore est, sane, sed etiam in auribus eorum amplius diluvium ad inveniendum, qui utitur maxime auctoribus imaginum cinematographicarum praebere video camera ejus vita (hoc est ars, ut videtur). Et obliti sunt ea nocte in hotel cubiculum terminus sursum in quodam loco quis gallery? Si illa ad magistratus? Et factum est, ut quod deest illi amice Jenny?'
    };
  }

  //* Data Set for page 8
  getDataForTab8 = (): any => {
    return {
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
    };
  }

  //* Data Set for page 9
  getDataForTab9 = (): any => {
    return {
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
      },
      "slider": [
        {
          "id": 1,
          "image": "assets/imgs/background/16.jpg",
          "title": "Free Ride Tour",
          "subtitle": "Best Offer",
        },
        {
          "id": 2,
          "image": "assets/imgs/background/13.jpg",
          "title": "Main Stage Event",
          "subtitle": "Main Event",
        },
        {
          "id": 3,
          "image": "assets/imgs/background/19.jpg",
          "title": "Bridge Tour",
          "subtitle": "Mountain",
        },
        {
          "id": 4,
          "image": "assets/imgs/background/21.jpg",
          "title": "Free Ride Tour",
          "subtitle": "Best Tourt",
        },
        {
          "id": 5,
          "image": "assets/imgs/background/6.jpg",
          "title": "Mountain Trout",
          "subtitle": "Mountain",
        },
        {
          "id": 6,
          "image": "assets/imgs/background/10.jpg",
          "title": "Sea ture",
          "subtitle": "Bridge Tour",
        },
        {
          "id": 7,
          "image": "assets/imgs/background/11.jpg",
          "title": "Free Ride Tour",
          "subtitle": "Best Events",
        },
        {
          "id": 8,
          "image": "assets/imgs/background/19.jpg",
          "title": "Mountain Trout",
          "subtitle": "Mountain",
        },
        {
          "id": 9,
          "image": "assets/imgs/background/16.jpg",
          "title": "Sea ture",
          "subtitle": "Best Events",
        },
        {
          "id": 10,
          "image": "assets/imgs/background/21.jpg",
          "title": "Free Ride Tour",
          "subtitle": "Main Event",
        }
      ]
    };
  }

  load(item: string): Observable<any> {
    this.loadingService.show();
    if (AppSettings.IS_FIREBASE_ENABLED) {
      return new Observable(observer => {
        this.af
          .object('tab/' + item)
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
