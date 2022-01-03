import { Component, Output, EventEmitter, Input, OnChanges, AfterViewInit } from '@angular/core';

@Component({
  selector: 'cs-scroll-segment-layout-3',
  templateUrl: 'scroll-segment-layout-3.page.html',
  styleUrls: ['scroll-segment-layout-3.page.scss'],
})
export class ScrollSegmentLayout3Page implements OnChanges, AfterViewInit {
  @Input() data: any;
  @Output() onItemClick = new EventEmitter();

  viewEntered = false;

  constructor() { }

  ngAfterViewInit() {
    this.viewEntered = true;    
  }
  
  ngOnChanges(changes: { [propKey: string]: any }) {
    if (changes['data']) {
      this.data = changes['data'].currentValue;
    }
  }

  onItemClickFunc(): void {
    if (event) {
      event.stopPropagation();
    }
    this.onItemClick.emit();
  }
}
