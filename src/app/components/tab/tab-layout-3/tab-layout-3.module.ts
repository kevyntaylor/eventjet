import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Tab7Page } from './pages/tab7/tab7.page';
import { Tab8Page } from './pages/tab8/tab8.page';
import { Tab9Page } from './pages/tab9/tab9.page';

import { TabLayout3Page } from './tab-layout-3.page';
import { AgmCoreModule } from '@agm/core';

const routes: Routes = [
  {
    path: 'tab',
    component: TabLayout3Page,
    children: [
      { path: 'tab7', children: [{ path: '', component: Tab7Page }] },
      { path: 'tab8', children: [{ path: '', component: Tab8Page }] },
      { path: 'tab9', children: [{ path: '', component: Tab9Page }] },
      { path: '', redirectTo: 'tab7' }
    ]
  }];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyA4-GoZzOqYTvxMe52YQZch5JaCFN6ACLg' })
  ],
  declarations: [Tab7Page, Tab8Page, Tab9Page, TabLayout3Page],
  exports: [RouterModule, Tab7Page, Tab8Page, Tab9Page, TabLayout3Page],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TabLayout3PageModule { }
