import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../../components/shared.module';

import { ItemDetailsSwipeToDismissPage } from './item-details-swipe-to-dismiss.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ItemDetailsSwipeToDismissPage
      }
    ])
  ],
  declarations: [ItemDetailsSwipeToDismissPage],
  exports:[ItemDetailsSwipeToDismissPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ItemDetailsSwipeToDismissPageModule {}
