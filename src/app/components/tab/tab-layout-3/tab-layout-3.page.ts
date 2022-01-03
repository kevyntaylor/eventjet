import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'cs-tab-layout-3',
  templateUrl: 'tab-layout-3.page.html',
  styleUrls: ['tab-layout-3.page.scss'],
})
export class TabLayout3Page implements OnChanges {
  @Input() data: any;

  constructor() { }

  ngOnChanges(changes: { [propKey: string]: any }) {
    this.data = changes['data'].currentValue;
  }
}
