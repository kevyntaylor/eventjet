import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

import { IService } from '../../services/IService';

import { ListViewExpandableService } from '../../services/list-view-expandable-service';
import { ListViewDragAndDropService } from '../../services/list-view-drag-and-drop-service';
import { ListViewSwipeToDismissService } from '../../services/list-view-swipe-to-dismiss-service';
import { ListViewGoogleCardsService } from '../../services/list-view-google-card-service';

import { GoogleAnalytics } from '@ionic-native/google-analytics/ngx';

@Component({
    templateUrl: 'sub-items.html',
    providers: [
        ListViewExpandableService,
        ListViewDragAndDropService,
        ListViewSwipeToDismissService,
        ListViewGoogleCardsService,
        GoogleAnalytics]
})
export class SubItemsPage {
    title: string;
    componentName: string;
    pages: any = {};
    listServices: { [key: string]: IService; } = {};
    service: IService;

    // services: array
    constructor(public navCtrl: NavController,
        private listViewExpandableService: ListViewExpandableService,
        private listViewDragAndDropService: ListViewDragAndDropService,
        private listViewSwipeToDismissService: ListViewSwipeToDismissService,
        private listViewGoogleCardsService: ListViewGoogleCardsService,
        private route: ActivatedRoute,
        private router: Router,
        private ga: GoogleAnalytics) {

        this.setGoogleAnalytics();

        this.listServices = {
            'expandable': this.listViewExpandableService,
            'dragAndDrop': this.listViewDragAndDropService,
            'swipeToDismiss': this.listViewSwipeToDismissService,
            'googleCards': this.listViewGoogleCardsService
        };

        this.componentName = this.route.snapshot.paramMap.get('type');
        this.service = this.listServices[this.componentName];

        if (this.service) {
            this.pages = this.service.getAllThemes();
            this.title = this.service.getTitle();
            this.eventTrackView(this.title);
        }
    }

    openPage(page: any) {
        this.navCtrl.navigateForward([page.url], {});
    }

    setGoogleAnalytics() {
        if (window.location.hostname != "localhost") {
         this.ga.startTrackerWithId("UA-35500609-14").then(() => {
            this.ga.trackEvent("active", "user", "click");
         })
       } else {
         console.log("Start Tracker");
       }
     }
   
    eventTrackView(event) {
        if (window.location.hostname != "localhost") {
            this.ga.trackView(event, "Items", false);
            this.ga.trackEvent("openPage", event, "click");
        } else {
            console.log("event:" + event);
        }
    }
}
