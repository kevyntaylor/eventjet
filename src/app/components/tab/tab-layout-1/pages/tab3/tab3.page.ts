import { Component, OnChanges } from '@angular/core';
import { TabsService } from './../../../../../services/tabs-service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  providers: [TabsService]
})
export class Tab3Page implements OnChanges {

  data = {}

  constructor(private service: TabsService) {
    this.service.load('tab3').subscribe(d => {
      this.data = d;
    });
  }

  ngOnChanges(changes: { [propKey: string]: any }) {
    this.data = changes['data'].currentValue;
  }
}
