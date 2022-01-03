import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'cs-spinner',
  templateUrl: 'spinner.page.html',
  styleUrls: ['spinner.page.scss'],
})
export class SpinnerPage implements OnChanges {
  @Input() name: any;

  svgImagePath:String

    sliderOptions = { pager: true };

  constructor() {
    this.setImagePath(this.name);
  }

  ngOnChanges(changes: { [propKey: string]: any }) {
    this.name = changes['name'].currentValue;
    this.setImagePath(this.name);
  }

  setImagePath(svgName) {
    if (svgName) {
      this.svgImagePath = "assets/svg/" + svgName + ".svg";
    }
  }
}
