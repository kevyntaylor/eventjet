import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
// import { IntroPageModule } from './../intro-page/intro-page.module';
import { SharedModule } from './../../components/shared.module';
import { IntroPage } from './../intro-page/intro-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // IntroPageModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage, IntroPage],
  entryComponents: [IntroPage],
  exports: [IntroPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePageModule { }
