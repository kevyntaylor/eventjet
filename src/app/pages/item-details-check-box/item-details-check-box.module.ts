import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../../components/shared.module';

import { ItemDetailsCheckBoxPage } from './item-details-check-box.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ItemDetailsCheckBoxPage
      }
    ])
  ],
  declarations: [ItemDetailsCheckBoxPage],
  exports:[ItemDetailsCheckBoxPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ItemDetailsCheckBoxPageModule {}
