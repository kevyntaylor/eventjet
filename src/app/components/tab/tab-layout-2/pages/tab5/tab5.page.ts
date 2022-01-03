import { Component, OnChanges } from '@angular/core';
import { TabsService } from './../../../../../services/tabs-service';

@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss'],
  providers: [TabsService]
})
export class Tab5Page implements OnChanges {

  data = {}

  constructor(private service: TabsService) {
    this.service.load('tab5').subscribe(d => {
      this.data = d;
    });
  }

  ngOnChanges(changes: { [propKey: string]: any }) {
    this.data = changes['data'].currentValue;
  }
}
