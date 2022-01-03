import { Component, OnChanges } from '@angular/core';
import { TabsService } from './../../../../../services/tabs-service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  providers: [TabsService]
})
export class Tab2Page implements OnChanges {

  data = {}

  constructor(private service: TabsService) {
    this.service.load('tab2').subscribe(d => {
      this.data = d;
    });
  }

  ngOnChanges(changes: { [propKey: string]: any }) {
    this.data = changes['data'].currentValue;
  }
}
