import { Component, Input, OnChanges, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'cs-full-image-gallery-layout-1',
  templateUrl: 'full-image-gallery-layout-1.page.html',
  styleUrls: ['full-image-gallery-layout-1.page.scss'],
})
export class FullImageGalleryLayout1Page implements OnChanges, AfterViewInit {
  @Input() data: any;

  @ViewChild('slider', {static: false}) slider;

  sliderOptions = { zoom: false };
  
  constructor() { }

  ngOnChanges(changes: { [propKey: string]: any }) {
    this.data = changes['data'].currentValue;
  }

  ngAfterViewInit() {
    this.slider.slideTo(this.data.index);
  }
}
