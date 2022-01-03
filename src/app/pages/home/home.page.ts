import { AppSettings } from './../../services/app-settings';
import { Component } from '@angular/core';
import { HomeService } from './../../services/home-service';
import { ModalController } from '@ionic/angular';
import { IntroPage } from '../intro-page/intro-page.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [HomeService]
})
export class HomePage {

  item = {}
  
  constructor(
    private homeService:HomeService, 
    public modalController: ModalController) { 
      this.item = this.homeService.getData();
      let showWizard = localStorage.getItem("SHOW_START_WIZARD");

      if (AppSettings.SHOW_START_WIZARD && !showWizard) {
        this.openModal()
      }
  }

  async openModal() {
    let modal = await this.modalController.create({component: IntroPage});
     return await modal.present();
  }
}
