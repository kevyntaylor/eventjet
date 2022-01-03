import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../../components/shared.module';

import { ItemDetailsExpandablePage } from './item-details-expandable.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ItemDetailsExpandablePage
      }
    ])
  ],
  declarations: [ItemDetailsExpandablePage],
  exports: [ItemDetailsExpandablePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ItemDetailsExpandablePageModule { }
