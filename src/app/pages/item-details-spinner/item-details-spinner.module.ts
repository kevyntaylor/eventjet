import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../../components/shared.module';

import { ItemDetailsSpinnerPage } from './item-details-spinner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ItemDetailsSpinnerPage
      }
    ])
  ],
  declarations: [ItemDetailsSpinnerPage],
  exports:[ItemDetailsSpinnerPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ItemDetailsSpinnerPageModule {}
