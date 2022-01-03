import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { HttpService } from '../../services/HttpService';
import { ValidationService } from '../../services/validation';
import { MailChimpService } from '../../services/mail-chimp-service';

import { IService } from '../../services/IService';

import { CheckBoxService } from '../../services/check-box-service';
import { AnimationService } from '../../services/animation-service';
import { TextViewService } from '../../services/text-view-service';
import { SpinnerService } from '../../services/spinner-service';
import { SplashScreenService } from '../../services/splash-screen-service';
import { SearchBarService } from '../../services/search-bar-service';
import { WizardService } from '../../services/wizard-service';
import { TabsService } from '../../services/tabs-service';
import { LoginService } from '../../services/login-service';
import { RegisterService } from '../../services/register-service';
import { ListViewService } from '../../services/list-view-service';
import { ParallaxService } from '../../services/parallax-service';
import { ImageGalleryService } from '../../services/image-gallery-service';
import { MapsService } from '../../services/maps-service';
import { QRCodeService } from '../../services/qrcode-service';
import { RadioButtonService } from '../../services/radio-button-service';
import { RangeService } from '../../services/range-service';
import { ToggleService } from '../../services/toggle-service';
import { SelectService } from '../../services/select-service';
import { ActionSheetService } from '../../services/action-sheet-service';
import { TimeLineService } from '../../services/time-line-service';
import { FormService } from '../../services/form-service';
import { CommentService } from '../../services/comment-service';
import { ProfileService } from '../../services/profile-service';
import { PaymentService } from '../../services/payment-service';
import { SegmentService } from '../../services/segment-service';
import { ScrollSegmentService } from '../../services/scroll-segment-service';
import { AlertService } from '../../services/alert-service';
import { NewPasswordService } from './../../services/new-password-services';
import { ForgetPasswordService } from './../../services/forget-password-services';

import { AppSettings } from './../../services/app-settings';

import { GoogleAnalytics } from '@ionic-native/google-analytics/ngx';

@Component({
    templateUrl: 'items.html',
    providers: [
        MailChimpService, TextViewService, SpinnerService,
        SplashScreenService, LoginService, RegisterService, AnimationService,
        SearchBarService, CheckBoxService, WizardService, TabsService, ParallaxService,
        ListViewService, ImageGalleryService, NewPasswordService, ForgetPasswordService,
        HttpService, ValidationService, MapsService, QRCodeService, RadioButtonService, RangeService,
        ToggleService, SelectService, ActionSheetService, TimeLineService, FormService, CommentService,
        ProfileService, SegmentService, AlertService, PaymentService, ScrollSegmentService, 
        GoogleAnalytics]
})
export class ItemsPage {
    title: string;
    componentName: string;
    pages: any = {};
    listServices: { [key: string]: IService; } = {};
    service: IService;

    // services: array
    constructor(public navCtrl: NavController,
        private textViewService: TextViewService,
        private spinnerService: SpinnerService,
        private imageGalleryService: ImageGalleryService,
        private searchBarService: SearchBarService,
        private checkBoxService: CheckBoxService,
        private animationService: AnimationService,
        private parallaxService: ParallaxService,
        private wizardService: WizardService,
        private tabsService: TabsService,
        private listViewService: ListViewService,
        private loginService: LoginService,
        private registerService: RegisterService,
        private splashScreenService: SplashScreenService,
        private httpService: HttpService,
        private validationService: ValidationService,
        private mailChimpService: MailChimpService,
        private mapsService: MapsService,
        private qRCodeService: QRCodeService,
        private radioButtonService: RadioButtonService,
        private rangeService: RangeService,
        private toggleService: ToggleService,
        private selectService: SelectService,
        private actionSheetService: ActionSheetService,
        private timeLineService: TimeLineService,
        private formService: FormService,
        private commentService: CommentService,
        public alertCtrl: AlertController,
        private profileService: ProfileService,
        private segmentService: SegmentService,
        private paymentService: PaymentService,
        private alertService: AlertService,
        private newPasswordService: NewPasswordService,
        private forgetPasswordService: ForgetPasswordService,
        private scrollSegmentService: ScrollSegmentService,
        private route: ActivatedRoute,
        private ga: GoogleAnalytics) {

        this.setGoogleAnalytics();

        this.listServices = {
            'checkBoxes': this.checkBoxService,
            'animation': this.animationService,
            'login': this.loginService,
            'register': this.registerService,
            'imageGallery': this.imageGalleryService,
            'textViews': this.textViewService,
            'spinner': this.spinnerService,
            'parallax': this.parallaxService,
            'wizard': this.wizardService,
            'searchBars': this.searchBarService,
            'tabs': this.tabsService,
            'listViews': this.listViewService,
            'splashScreens': this.splashScreenService,
            'maps': this.mapsService,
            'timeline': this.timeLineService,
            'qrcode': this.qRCodeService,
            'radioButton': this.radioButtonService,
            'range': this.rangeService,
            'toggle': this.toggleService,
            'select': this.selectService,
            'form': this.formService,
            'comment': this.commentService,
            'profile': this.profileService,
            'actionSheet': this.actionSheetService,
            'segment': this.segmentService,
            'payment': this.paymentService,
            'alert': this.alertService,
            'newPassword': this.newPasswordService,
            'forgetPassword': this.forgetPasswordService,
            'scrollSegment': this.scrollSegmentService
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
        if (AppSettings.SUBSCRIBE) {
          if (!this.mailChimpService.showMailChimpForm()) {
            this.showPrompt();
            this.mailChimpService.setMailChimpForm(true);
          } else {
            this.navCtrl.navigateForward([page.url], {});
          }
        } else {
            this.navCtrl.navigateForward([page.url], {});
        }
    }

    async showPrompt() {
        const alertDialog = await this.alertCtrl.create({
            header: 'STAY TUNED FOR NEW THEMES AND FREEBIES',
            message: 'SUBSCRIBE TO <br> OUR NEWSLETTER',
            cssClass: 'basic-dialog',
            inputs: [
                {
                    name: 'email',
                    placeholder: 'Your e-mail'
                },
            ],
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Send',
                    handler: data => {
                        if (data) {
                            if (this.validationService.isMail(data.email)) {
                                this.httpService.sendData(data.email).subscribe(
                                    _ => {
                                        this.mailChimpService.hideMailChimp();
                                    }, err => {
                                        console.log(JSON.stringify(err))
                                    }, null);
                            } else {
                                return false;
                            }
                        } else {
                            return false;
                        }
                    }
                }
            ]
        });
        alertDialog.present();
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

