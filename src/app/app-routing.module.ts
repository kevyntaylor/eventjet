import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./pages/list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'items/:type',
    loadChildren: () => import('./pages/items/items.module').then(m => m.ItemsPageModule)
  },
  {
    path: 'subitems/:type',
    loadChildren: () => import('./pages/sub-items/sub-items.module').then(m => m.SubItemsPageModule)
  },
  {
    path: 'textview',
    loadChildren: () => import('./pages/item-details-text-view/item-details-text-view.module').then(m => m.ItemDetailsPageTextViewModule)
  },
  {
    path: 'login/:type',
    loadChildren: () => import('./pages/item-details-login/item-details-login.module').then(m => m.ItemDetailsLoginPageModule)
  },
  {
    path: 'register/:type',
    loadChildren: () => import('./pages/item-details-register/item-details-register.module').then(m => m.ItemDetailsRegisterPageModule)
  },
  {
    path: 'forgot-password/:type',
    loadChildren: () => import('./pages/item-details-forgot-password/item-details-forgot-password.module').then(m => m.ItemDetailsForgotPasswordPageModule)
  },
  {
    path: 'new-password/:type',
    loadChildren: () => import('./pages/item-details-new-password/item-details-new-password.module').then(m => m.ItemDetailsNewPasswordPageModule)
  },
  {
    path: 'check-boxes/:type',
    loadChildren: () => import('./pages/item-details-check-box/item-details-check-box.module').then(m => m.ItemDetailsCheckBoxPageModule)
  },
  {
    path: 'animation/:type',
    loadChildren: () => import('./pages/item-details-animation/item-details-animation.module').then(m => m.ItemDetailsAnimationPageModule)
  },
  {
    path: 'radio-button/:type',
    loadChildren: () => import('./pages/item-details-radio-button/item-details-radio-button.module').then(m => m.ItemDetailsRadioButtonPageModule)
  },
  {
    path: 'toggle/:type',
    loadChildren: () => import('./pages/item-details-toggle-button/item-details-toggle-button.module').then(m => m.ItemDetailsToggleButtonPageModule)
  },
  {
    path: 'form/:type',
    loadChildren: () => import('./pages/item-details-forms/item-details-forms.module').then(m => m.ItemDetailsFormsPageModule)
  },
  {
    path: 'splash-screens/:type',
    loadChildren: () => import('./pages/item-details-splash-screen/item-details-splash-screen.module').then(m => m.ItemDetailsSplashScreenPageModule)
  },
  {
    path: 'search-bars/:type',
    loadChildren: () => import('./pages/item-details-search-bar/item-details-search-bar.module').then(m => m.ItemDetailsSearchBarPageModule)
  },
  {
    path: 'wizard/:type',
    loadChildren: () => import('./pages/item-details-wizard/item-details-wizard.module').then(m => m.ItemDetailsWizardPageModule)
  },
  {
    path: 'parallax/:type',
    loadChildren: () => import('./pages/item-details-parallax/item-details-parallax.module').then(m => m.ItemDetailsParallaxPageModule)
  },
  {
    path: 'spinner/:type',
    loadChildren: () => import('./pages/item-details-spinner/item-details-spinner.module').then(m => m.ItemDetailsSpinnerPageModule)
  },
  {
    path: 'maps/:type',
    loadChildren: () => import('./pages/item-details-map/item-details-map.module').then(m => m.ItemDetailsMapPageModule)
  },
  {
    path: 'qrcode/:type',
    loadChildren: () => import('./pages/item-details-qrcode/item-details-qrcode.module').then(m => m.ItemDetailsQrcodePageModule)
  },
  {
    path: 'timeline/:type',
    loadChildren: () => import('./pages/item-details-timeline/item-details-timeline.module').then(m => m.ItemDetailsTimeLinePageModule)
  },
  {
    path: 'profile/:type',
    loadChildren: () => import('./pages/item-details-profile/item-details-profile.module').then(m => m.ItemDetailsProfilePageModule)
  },
  {
    path: 'range/:type',
    loadChildren: () => import('./pages/item-details-range/item-details-range.module').then(m => m.ItemDetailsRangePageModule)
  },
  {
    path: 'select/:type',
    loadChildren: () => import('./pages/item-details-select/item-details-select.module').then(m => m.ItemDetailsSelectPageModule)
  },
  {
    path: 'comment/:type',
    loadChildren: () => import('./pages/item-details-comment/item-details-comment.module').then(m => m.ItemDetailsCommentPageModule)
  },
  {
    path: 'payment/:type',
    loadChildren: () => import('./pages/item-details-payment/item-details-payment.module').then(m => m.ItemDetailsPaymentPageModule)
  },
  {
    path: 'action-sheet/:type',
    loadChildren: () => import('./pages/item-details-action-sheet/item-details-action-sheet.module').then(m => m.ItemDetailsActionSheetPageModule)
  },
  {
    path: 'alert/:type',
    loadChildren: () => import('./pages/item-details-alert/item-details-alert.module').then(m => m.ItemDetailsAlertPageModule)
  },
  {
    path: 'expandable/:type',
    loadChildren: () => import('./pages/item-details-expandable/item-details-expandable.module').then(m => m.ItemDetailsExpandablePageModule)
  },
  {
    path: 'drag-and-drop/:type',
    loadChildren: () => import('./pages/item-details-drag-and-drop/item-details-drag-and-drop.module').then(m => m.ItemDetailsDragAndDropPageModule)
  },
  {
    path: 'google-card/:type',
    loadChildren: () => import('./pages/item-details-google-card/item-details-google-card.module').then(m => m.ItemDetailsGoogleCardPageModule)
  },
  {
    path: 'swipe-to-dismiss/:type',
    loadChildren: () => import('./pages/item-details-swipe-to-dismiss/item-details-swipe-to-dismiss.module').then(m => m.ItemDetailsSwipeToDismissPageModule)
  },
  {
    path: 'segment/:type',
    loadChildren: () => import('./pages/item-details-segment/item-details-segment.module').then(m => m.ItemDetailsSegmentPageModule)
  },
  {
    path: 'image-gallery/:type',
    loadChildren: () => import('./pages/item-details-image-gallery/item-details-image-gallery.module').then(m => m.ItemDetailsImageGalleryPageModule)
  },
  {
    path: 'image-gallery-subgallery',
    loadChildren: () => import('./pages/item-details-image-subgallery/item-details-image-subgallery.module').then(m => m.ItemDetailsImageSubGalleryPageModule)
  },
  {
    path: 'full-image-gallery',
    loadChildren: () => import('./pages/item-details-full-image-gallery/item-details-full-image-gallery.module').then(m => m.ItemDetailsFullImageGalleryPageModule)
  },
  {
    path: 'tab/:type',
    loadChildren: () => import('./pages/item-details-tab/item-details-tab.module').then(m => m.ItemDetailsTabPageModule)
  },
  {
    path: 'scrollSegment/:type',
    loadChildren: () => import('./pages/item-details-scroll-segment/item-details-scroll-segment.module').then(m => m.ItemDetailsScrollSegmentPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/item-details-settings/item-details-settings.module').then(m => m.ItemDetailsSettingsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
