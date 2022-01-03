import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../../components/shared.module';

import { ItemDetailsRangePage } from './item-details-range.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ItemDetailsRangePage
      }
    ])
  ],
  declarations: [ItemDetailsRangePage],
  exports:[ItemDetailsRangePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ItemDetailsRangePageModule {}
