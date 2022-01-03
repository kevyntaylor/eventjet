import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { ItemDetailsPageTextView } from './item-details-text-view.page';

@NgModule({
  imports: [
    CommonModule, FormsModule, IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ItemDetailsPageTextView
      }
    ])
  ],
  declarations: [ItemDetailsPageTextView],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ItemDetailsPageTextViewModule {}
