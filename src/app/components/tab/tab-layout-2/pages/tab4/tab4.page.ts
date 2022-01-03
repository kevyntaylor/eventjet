import { Component, OnChanges } from '@angular/core';
import { TabsService } from './../../../../../services/tabs-service';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],
  providers: [TabsService]
})
export class Tab4Page implements OnChanges {

  data = {}

  constructor(private service: TabsService) {
    this.service.load('tab4').subscribe(d => {
      this.data = d;
    });
  }

  ngOnChanges(changes: { [propKey: string]: any }) {
    this.data = changes['data'].currentValue;
  }
}
