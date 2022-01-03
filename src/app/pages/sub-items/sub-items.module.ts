import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { SubItemsPage } from './sub-items.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: SubItemsPage
      }
    ])
  ],
  declarations: [SubItemsPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SubItemsPageModule { }
