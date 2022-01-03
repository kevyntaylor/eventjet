import { Component, Output, EventEmitter, Input, ViewChild, OnChanges, AfterViewInit } from '@angular/core';

@Component({
  selector: 'cs-wizard-layout-1',
  templateUrl: 'wizard-layout-1.page.html',
  styleUrls: ['wizard-layout-1.page.scss'],
})
export class WizardLayout1Page implements OnChanges, AfterViewInit {
  @Input() data: any;
  @Output() onFinish = new EventEmitter();
  @Output() onNext = new EventEmitter();
  @Output() onPrevious = new EventEmitter();

  @ViewChild('wizardSlider', {static: false}) slider;

  sliderOptions = { pager: true };

  viewEntered = false;
  prev = false;
  next = true;
  ignoreDidChange = false;

  constructor() { }

  ngAfterViewInit() {
    this.viewEntered = true;    
  }

  ngOnChanges(changes: { [propKey: string]: any }) {
    this.data = changes['data'].currentValue;
    this.ionSlideReachStart();
  }

  onFinishFunc() {
    if (event) {
      event.stopPropagation();
    }
    this.onFinish.emit();
  }

  onNextFunc() {
    if (event) {
      event.stopPropagation();
    }
    this.onNext.emit();
    this.slider.slideNext(300);
  }

  onPreviousFunc() {
    this.onPrevious.emit();
    this.slider.slidePrev(300);
  }

  ionSlideReachStart() {
    this.prev = false;
    this.next = true;
    this.ignoreDidChange = true;
  }

  ionSlideReachEnd() {
    this.prev = true;
    this.next = false;
    this.ignoreDidChange = true;
  }

  ionSlideDidChange() {
    if (this.ignoreDidChange) {
      this.ignoreDidChange = false;
    } else {
      this.prev = true;
      this.next = true;
    }
  }
}
