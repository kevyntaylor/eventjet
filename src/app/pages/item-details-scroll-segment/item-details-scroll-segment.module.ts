import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../components/shared.module';

import { ItemDetailsScrollSegmentPage } from './item-details-scroll-segment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ItemDetailsScrollSegmentPage
      }
    ])
  ],
  declarations: [ItemDetailsScrollSegmentPage],
  exports:[ItemDetailsScrollSegmentPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ItemDetailsScrollSegmentPageModule {}
