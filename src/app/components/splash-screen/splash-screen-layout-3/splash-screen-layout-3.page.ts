import { Component, Output, EventEmitter, Input, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'cs-splash-screen-layout-3',
  templateUrl: 'splash-screen-layout-3.page.html',
  styleUrls: ['splash-screen-layout-3.page.scss'],
})
export class SplashScreenLayout3Page implements OnChanges, OnDestroy {
  @Input() data: any;
  @Output() onRedirect = new EventEmitter();

  timer: any;

  constructor() { }

  ngOnChanges(changes: { [propKey: string]: any }) {
    clearInterval(this.timer);
    this.data = changes['data'].currentValue;
    this.executeEvents();
  }

  executeEvents(): void {
    const duration = (this.data && this.data.duration) ? this.data.duration : 10000;
    let self = this;
    this.timer = setTimeout(function() {
      self.onRedirect.emit();
    }, duration);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }
}
