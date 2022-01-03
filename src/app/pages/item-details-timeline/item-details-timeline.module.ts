import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../../components/shared.module';

import { ItemDetailsTimeLinePage } from './item-details-timeline.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ItemDetailsTimeLinePage
      }
    ])
  ],
  declarations: [ItemDetailsTimeLinePage],
  exports:[ItemDetailsTimeLinePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ItemDetailsTimeLinePageModule {}
