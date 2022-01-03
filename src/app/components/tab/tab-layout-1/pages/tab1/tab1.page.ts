import { Component, OnChanges } from '@angular/core';
import { TabsService } from './../../../../../services/tabs-service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  providers: [TabsService]
})
export class Tab1Page implements OnChanges {

  data = {}

  constructor(private service: TabsService) {
    this.service.load('tab1').subscribe(d => {
      this.data = d;
    });
  }

  ngOnChanges(changes: { [propKey: string]: any }) {
    this.data = changes['data'].currentValue;
  }
}
