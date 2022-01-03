import { Component } from '@angular/core';

@Component({
    templateUrl: 'item-details-settings.html',
    styleUrls: ['item-details-settings.page.scss']
})
export class ItemDetailsSettingsPage {
    rtlChecked:Boolean = false;

    constructor() {
        this.rtlChecked = localStorage.getItem('isEnabledRTL') == "true"
    }

    changeTheme(name) {
        if (name) {
          document.body.removeAttribute("class");
          document.body.classList.add(name);
        }
    }

    ionChange(e){
        localStorage.setItem('isEnabledRTL', "" + this.rtlChecked)


        document.getElementsByTagName('ion-menu')[0]
                .setAttribute('side', this.rtlChecked  ? 'end': 'start');
                document.getElementsByTagName('html')[0]
                .setAttribute('dir', this.rtlChecked  ? 'rtl': 'ltr');


    }
}
