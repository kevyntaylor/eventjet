import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Tab1Page } from './pages/tab1/tab1.page';
import { Tab3Page } from './pages/tab3/tab3.page';
import { Tab2Page } from './pages/tab2/tab2.page';

import { TabLayout1Page } from './tab-layout-1.page';

const routes: Routes = [
  {
    path: 'tab',
    component: TabLayout1Page,
    children: [
      { path: 'tab1', children: [{ path: '', component: Tab1Page }] },
      { path: 'tab2', children: [{ path: '', component: Tab2Page }] },
      { path: 'tab3', children: [{ path: '', component: Tab3Page }] },
      { path: '', redirectTo: 'tab1' }
    ]
  }];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Tab1Page, Tab2Page, Tab3Page, TabLayout1Page],
  exports: [RouterModule, Tab1Page, Tab2Page, Tab3Page, TabLayout1Page],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TabLayout1PageModule { }
