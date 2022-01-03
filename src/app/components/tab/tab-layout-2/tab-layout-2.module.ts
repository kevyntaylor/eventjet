import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Tab4Page } from './pages/tab4/tab4.page';
import { Tab5Page } from './pages/tab5/tab5.page';
import { Tab6Page } from './pages/tab6/tab6.page';

import { TabLayout2Page } from './tab-layout-2.page';

const routes: Routes = [
  {
    path: 'tab',
    component: TabLayout2Page,
    children: [
      { path: 'tab4', children: [{ path: '', component: Tab4Page }] },
      { path: 'tab5', children: [{ path: '', component: Tab5Page }] },
      { path: 'tab6', children: [{ path: '', component: Tab6Page }] },
      { path: '', redirectTo: 'tab4' }
    ]
  }];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Tab4Page, Tab5Page, Tab6Page, TabLayout2Page],
  exports: [RouterModule, Tab4Page, Tab5Page, Tab6Page, TabLayout2Page],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TabLayout2PageModule { }
