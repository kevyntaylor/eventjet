import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { FilterPipe } from './search-bar/FilterPipe';
import { ParallaxHeader } from './parallax/parallax-header';
import { AgmCoreModule } from '@agm/core';

import { LoginLayout1Page } from './login/login-layout-1/login-layout-1.page';
import { LoginLayout2Page } from './login/login-layout-2/login-layout-2.page';

import { RegisterLayout1Page } from './register/register-layout-1/register-layout-1.page';
import { RegisterLayout2Page } from './register/register-layout-2/register-layout-2.page';

import { ForgotPasswordLayout1Page } from './forgot-password/forgot-password-layout-1/forgot-password-layout-1.page';
import { ForgotPasswordLayout2Page } from './forgot-password/forgot-password-layout-2/forgot-password-layout-2.page';

import { NewPasswordLayout1Page } from './new-password/new-password-layout-1/new-password-layout-1.page';
import { NewPasswordLayout2Page } from './new-password/new-password-layout-2/new-password-layout-2.page';

import { CheckBoxLayout1Page } from './check-box/check-box-layout-1/check-box-layout-1.page';
import { CheckBoxLayout2Page } from './check-box/check-box-layout-2/check-box-layout-2.page';
import { CheckBoxLayout3Page } from './check-box/check-box-layout-3/check-box-layout-3.page';

import { AnimationLayout1Page } from './animation/animation-layout-1/animation-layout-1.page';
import { AnimationLayout2Page } from './animation/animation-layout-2/animation-layout-2.page';
import { AnimationLayout3Page } from './animation/animation-layout-3/animation-layout-3.page';
import { AnimationLayout4Page } from './animation/animation-layout-4/animation-layout-4.page';
import { AnimationLayout5Page } from './animation/animation-layout-5/animation-layout-5.page';
import { AnimationLayout6Page } from './animation/animation-layout-6/animation-layout-6.page';
import { AnimationLayout7Page } from './animation/animation-layout-7/animation-layout-7.page';
import { AnimationLayout8Page } from './animation/animation-layout-8/animation-layout-8.page';
import { AnimationLayout9Page } from './animation/animation-layout-9/animation-layout-9.page';
import { AnimationLayout10Page } from './animation/animation-layout-10/animation-layout-10.page';

import { RadioButtonLayout1Page } from './radio-button/radio-button-layout-1/radio-button-layout-1.page';
import { RadioButtonLayout2Page } from './radio-button/radio-button-layout-2/radio-button-layout-2.page';
import { RadioButtonLayout3Page } from './radio-button/radio-button-layout-3/radio-button-layout-3.page';

import { ToggleButtonLayout1Page } from './toggle-button/toggle-button-layout-1/toggle-button-layout-1.page';
import { ToggleButtonLayout2Page } from './toggle-button/toggle-button-layout-2/toggle-button-layout-2.page';
import { ToggleButtonLayout3Page } from './toggle-button/toggle-button-layout-3/toggle-button-layout-3.page';

import { FormsLayout1Page } from './forms/forms-layout-1/forms-layout-1.page';
import { FormsLayout2Page } from './forms/forms-layout-2/forms-layout-2.page';
import { FormsLayout3Page } from './forms/forms-layout-3/forms-layout-3.page';
import { FormsLayout4Page } from './forms/forms-layout-4/forms-layout-4.page';

import { SplashScreenLayout1Page } from './splash-screen/splash-screen-layout-1/splash-screen-layout-1.page';
import { SplashScreenLayout2Page } from './splash-screen/splash-screen-layout-2/splash-screen-layout-2.page';
import { SplashScreenLayout3Page } from './splash-screen/splash-screen-layout-3/splash-screen-layout-3.page';

import { SearchBarLayout1Page } from './search-bar/search-bar-layout-1/search-bar-layout-1.page';
import { SearchBarLayout2Page } from './search-bar/search-bar-layout-2/search-bar-layout-2.page';
import { SearchBarLayout3Page } from './search-bar/search-bar-layout-3/search-bar-layout-3.page';

import { WizardLayout1Page } from './wizard/wizard-layout-1/wizard-layout-1.page';
import { WizardLayout2Page } from './wizard/wizard-layout-2/wizard-layout-2.page';
import { WizardLayout3Page } from './wizard/wizard-layout-3/wizard-layout-3.page';
import { WizardLayout4Page } from './wizard/wizard-layout-4/wizard-layout-4.page';

import { ParallaxLayout1Page } from './parallax/parallax-layout-1/parallax-layout-1.page';
import { ParallaxLayout2Page } from './parallax/parallax-layout-2/parallax-layout-2.page';
import { ParallaxLayout3Page } from './parallax/parallax-layout-3/parallax-layout-3.page';
import { ParallaxLayout4Page } from './parallax/parallax-layout-4/parallax-layout-4.page';

import { SpinnerPage } from './spinner/spinner.page';

import { MapLayout1Page } from './map/map-layout-1/map-layout-1.page';
import { MapLayout2Page } from './map/map-layout-2/map-layout-2.page';
import { MapLayout3Page } from './map/map-layout-3/map-layout-3.page';

import { QrcodeLayout1Page } from './qrcode/qrcode-layout-1/qrcode-layout-1.page';
import { QrcodeLayout2Page } from './qrcode/qrcode-layout-2/qrcode-layout-2.page';

import { TimeLineLayout1Page } from './timeline/timeline-box-layout-1/timeline-layout-1.page';
import { TimeLineLayout2Page } from './timeline/timeline-box-layout-2/timeline-layout-2.page';
import { TimeLineLayout3Page } from './timeline/timeline-box-layout-3/timeline-layout-3.page';

import { ProfileLayout1Page } from './profile/profile-layout-1/profile-layout-1.page';
import { ProfileLayout2Page } from './profile/profile-layout-2/profile-layout-2.page';
import { ProfileLayout3Page } from './profile/profile-layout-3/profile-layout-3.page';
import { ProfileLayout4Page } from './profile/profile-layout-4/profile-layout-4.page';
import { ProfileLayout5Page } from './profile/profile-layout-5/profile-layout-5.page';

import { RangeLayout1Page } from './range/range-layout-1/range-layout-1.page';
import { RangeLayout2Page } from './range/range-layout-2/range-layout-2.page';
import { RangeLayout3Page } from './range/range-layout-3/range-layout-3.page';
import { RangeLayout4Page } from './range/range-layout-4/range-layout-4.page';

import { SelectLayout1Page } from './select/select-layout-1/select-layout-1.page';
import { SelectLayout2Page } from './select/select-layout-2/select-layout-2.page';
import { SelectLayout3Page } from './select/select-layout-3/select-layout-3.page';
import { SelectLayout4Page } from './select/select-layout-4/select-layout-4.page';
import { SelectLayout5Page } from './select/select-layout-5/select-layout-5.page';
import { SelectLayout6Page } from './select/select-layout-6/select-layout-6.page';

import { CommentLayout1Page } from './comment/comment-layout-1/comment-layout-1.page';
import { CommentLayout2Page } from './comment/comment-layout-2/comment-layout-2.page';

import { PaymentLayout1Page } from './payment/payment-layout-1/payment-layout-1.page';

import { ActionSheetLayout1Page } from './action-sheet/action-sheet-layout-1/action-sheet-layout-1.page';
import { ActionSheetLayout2Page } from './action-sheet/action-sheet-layout-2/action-sheet-layout-2.page';
import { ActionSheetLayout3Page } from './action-sheet/action-sheet-layout-3/action-sheet-layout-3.page';

import { AlertLayout1Page } from './alert/alert-layout-1/alert-layout-1.page';
import { AlertLayout2Page } from './alert/alert-layout-2/alert-layout-2.page';
import { AlertLayout3Page } from './alert/alert-layout-3/alert-layout-3.page';

import { ExpandableListLayout1Page } from './expandable-list/expandable-list-layout-1/expandable-list-layout-1.page';
import { ExpandableListLayout2Page } from './expandable-list/expandable-list-layout-2/expandable-list-layout-2.page';
import { ExpandableListLayout3Page } from './expandable-list/expandable-list-layout-3/expandable-list-layout-3.page';

import { DragAndDropListLayout1Page } from './drag-and-drop-list/drag-and-drop-list-layout-1/drag-and-drop-list-layout-1.page';
import { DragAndDropListLayout2Page } from './drag-and-drop-list/drag-and-drop-list-layout-2/drag-and-drop-list-layout-2.page';
import { DragAndDropListLayout3Page } from './drag-and-drop-list/drag-and-drop-list-layout-3/drag-and-drop-list-layout-3.page';

import { GoogleCardListLayout1Page } from './google-card-list/google-card-list-layout-1/google-card-list-layout-1.page';
import { GoogleCardListLayout2Page } from './google-card-list/google-card-list-layout-2/google-card-list-layout-2.page';
import { GoogleCardListLayout3Page } from './google-card-list/google-card-list-layout-3/google-card-list-layout-3.page';
import { GoogleCardListLayout4Page } from './google-card-list/google-card-list-layout-4/google-card-list-layout-4.page';

import { SwipeToDismissListLayout1Page } from './swipe-to-dismiss-list/swipe-to-dismiss-list-layout-1/swipe-to-dismiss-list-layout-1.page';
import { SwipeToDismissListLayout2Page } from './swipe-to-dismiss-list/swipe-to-dismiss-list-layout-2/swipe-to-dismiss-list-layout-2.page';
import { SwipeToDismissListLayout3Page } from './swipe-to-dismiss-list/swipe-to-dismiss-list-layout-3/swipe-to-dismiss-list-layout-3.page';

import { SegmentListLayout1Page } from './segment/segment-layout-1/segment-layout-1.page';
import { SegmentListLayout2Page } from './segment/segment-layout-2/segment-layout-2.page';
import { SegmentListLayout3Page } from './segment/segment-layout-3/segment-layout-3.page';

import { ScrollSegmentLayout1Page } from './scroll-segment/scroll-segment-layout-1/scroll-segment-layout-1.page';
import { ScrollSegmentLayout2Page } from './scroll-segment/scroll-segment-layout-2/scroll-segment-layout-2.page';
import { ScrollSegmentLayout3Page } from './scroll-segment/scroll-segment-layout-3/scroll-segment-layout-3.page';
import { ScrollSegmentLayout4Page } from './scroll-segment/scroll-segment-layout-4/scroll-segment-layout-4.page';

import { ImageGalleryLayout1Page } from './image-gallery/image-gallery-layout-1/image-gallery-layout-1.page';
import { ImageGalleryLayout2Page } from './image-gallery/image-gallery-layout-2/image-gallery-layout-2.page';
import { ImageGalleryLayout3Page } from './image-gallery/image-gallery-layout-3/image-gallery-layout-3.page';

import { FullImageGalleryLayout1Page } from './full-image-gallery/full-image-gallery-layout-1/full-image-gallery-layout-1.page';

import { TabLayout1PageModule } from './tab/tab-layout-1/tab-layout-1.module';
import { TabLayout2PageModule } from './tab/tab-layout-2/tab-layout-2.module';
import { TabLayout3PageModule } from './tab/tab-layout-3/tab-layout-3.module';

import { AnimateItemsDirective } from '../directives/animate-items.directive';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabLayout1PageModule,
    TabLayout2PageModule,
    TabLayout3PageModule,
    AgmCoreModule.forRoot({ apiKey: '' })
  ],
  declarations: [
    AnimateItemsDirective,
    FilterPipe, ParallaxHeader, LoginLayout1Page, LoginLayout2Page,
    RegisterLayout1Page, RegisterLayout2Page,
    ForgotPasswordLayout1Page, ForgotPasswordLayout2Page,
    NewPasswordLayout1Page, NewPasswordLayout2Page,
    CheckBoxLayout1Page, CheckBoxLayout2Page, CheckBoxLayout3Page,
    AnimationLayout1Page, AnimationLayout2Page, AnimationLayout3Page, AnimationLayout4Page, AnimationLayout5Page,
    AnimationLayout6Page, AnimationLayout7Page, AnimationLayout8Page, AnimationLayout9Page, AnimationLayout10Page,
    RadioButtonLayout1Page, RadioButtonLayout2Page, RadioButtonLayout3Page,
    ToggleButtonLayout1Page, ToggleButtonLayout2Page, ToggleButtonLayout3Page,
    FormsLayout1Page, FormsLayout2Page, FormsLayout3Page, FormsLayout4Page,
    SplashScreenLayout1Page, SplashScreenLayout2Page, SplashScreenLayout3Page,
    SearchBarLayout1Page, SearchBarLayout2Page, SearchBarLayout3Page,
    WizardLayout1Page, WizardLayout2Page, WizardLayout3Page, WizardLayout4Page,
    ParallaxLayout1Page, ParallaxLayout2Page, ParallaxLayout3Page, ParallaxLayout4Page,
    SpinnerPage, MapLayout1Page, MapLayout2Page, MapLayout3Page,
    QrcodeLayout1Page, QrcodeLayout2Page,
    TimeLineLayout1Page, TimeLineLayout2Page, TimeLineLayout3Page,
    ProfileLayout1Page, ProfileLayout2Page, ProfileLayout3Page, ProfileLayout4Page, ProfileLayout5Page,
    RangeLayout1Page, RangeLayout2Page, RangeLayout3Page, RangeLayout4Page,
    SelectLayout1Page, SelectLayout2Page, SelectLayout3Page,
    SelectLayout4Page, SelectLayout5Page, SelectLayout6Page,
    CommentLayout1Page, CommentLayout2Page, PaymentLayout1Page,
    ActionSheetLayout1Page, ActionSheetLayout2Page, ActionSheetLayout3Page,
    AlertLayout1Page, AlertLayout2Page, AlertLayout3Page,
    ExpandableListLayout1Page, ExpandableListLayout2Page, ExpandableListLayout3Page,
    DragAndDropListLayout1Page, DragAndDropListLayout2Page, DragAndDropListLayout3Page,
    GoogleCardListLayout1Page, GoogleCardListLayout2Page, GoogleCardListLayout3Page, GoogleCardListLayout4Page,
    SwipeToDismissListLayout1Page, SwipeToDismissListLayout2Page, SwipeToDismissListLayout3Page,
    SegmentListLayout1Page, SegmentListLayout2Page, SegmentListLayout3Page,
    ImageGalleryLayout1Page, ImageGalleryLayout2Page, ImageGalleryLayout3Page,
    FullImageGalleryLayout1Page,
    ScrollSegmentLayout1Page, ScrollSegmentLayout2Page, ScrollSegmentLayout3Page, ScrollSegmentLayout4Page
  ],
  exports: [
    FilterPipe, ParallaxHeader, LoginLayout1Page, LoginLayout2Page,
    RegisterLayout1Page, RegisterLayout2Page,
    ForgotPasswordLayout1Page, ForgotPasswordLayout2Page,
    NewPasswordLayout1Page, NewPasswordLayout2Page,
    CheckBoxLayout1Page, CheckBoxLayout2Page, CheckBoxLayout3Page,
    AnimationLayout1Page, AnimationLayout2Page, AnimationLayout3Page, AnimationLayout4Page, AnimationLayout5Page,
    AnimationLayout6Page, AnimationLayout7Page, AnimationLayout8Page, AnimationLayout9Page, AnimationLayout10Page,
    RadioButtonLayout1Page, RadioButtonLayout2Page, RadioButtonLayout3Page,
    ToggleButtonLayout1Page, ToggleButtonLayout2Page, ToggleButtonLayout3Page,
    FormsLayout1Page, FormsLayout2Page, FormsLayout3Page, FormsLayout4Page,
    SplashScreenLayout1Page, SplashScreenLayout2Page, SplashScreenLayout3Page,
    SearchBarLayout1Page, SearchBarLayout2Page, SearchBarLayout3Page,
    WizardLayout1Page, WizardLayout2Page, WizardLayout3Page, WizardLayout4Page,
    ParallaxLayout1Page, ParallaxLayout2Page, ParallaxLayout3Page, ParallaxLayout4Page,
    SpinnerPage, MapLayout1Page, MapLayout2Page, MapLayout3Page,
    QrcodeLayout1Page, QrcodeLayout2Page,
    TimeLineLayout1Page, TimeLineLayout2Page, TimeLineLayout3Page,
    ProfileLayout1Page, ProfileLayout2Page, ProfileLayout3Page, ProfileLayout4Page, ProfileLayout5Page,
    RangeLayout1Page, RangeLayout2Page, RangeLayout3Page, RangeLayout4Page,
    SelectLayout1Page, SelectLayout2Page, SelectLayout3Page,
    SelectLayout4Page, SelectLayout5Page, SelectLayout6Page,
    CommentLayout1Page, CommentLayout2Page, PaymentLayout1Page,
    ActionSheetLayout1Page, ActionSheetLayout2Page, ActionSheetLayout3Page,
    AlertLayout1Page, AlertLayout2Page, AlertLayout3Page,
    ExpandableListLayout1Page, ExpandableListLayout2Page, ExpandableListLayout3Page,
    DragAndDropListLayout1Page, DragAndDropListLayout2Page, DragAndDropListLayout3Page,
    GoogleCardListLayout1Page, GoogleCardListLayout2Page, GoogleCardListLayout3Page, GoogleCardListLayout4Page,
    SwipeToDismissListLayout1Page, SwipeToDismissListLayout2Page, SwipeToDismissListLayout3Page,
    SegmentListLayout1Page, SegmentListLayout2Page, SegmentListLayout3Page,
    ImageGalleryLayout1Page, ImageGalleryLayout2Page, ImageGalleryLayout3Page,
    FullImageGalleryLayout1Page, ScrollSegmentLayout1Page, ScrollSegmentLayout2Page, ScrollSegmentLayout3Page, ScrollSegmentLayout4Page
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
