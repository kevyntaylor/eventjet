import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'cs-tab-layout-2',
  templateUrl: 'tab-layout-2.page.html',
  styleUrls: ['tab-layout-2.page.scss'],
})
export class TabLayout2Page implements OnChanges {
  @Input() data: any;

  constructor() { }

  ngOnChanges(changes: { [propKey: string]: any }) {
    this.data = changes['data'].currentValue;
  }
}
