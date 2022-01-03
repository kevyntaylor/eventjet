import { Component, Output, EventEmitter, Input, OnChanges, AfterViewInit } from '@angular/core';

@Component({
  selector: 'cs-parallax-layout-2',
  templateUrl: 'parallax-layout-2.page.html',
  styleUrls: ['parallax-layout-2.page.scss'],
})
export class ParallaxLayout2Page implements OnChanges, AfterViewInit {

    @Input() data: any;
    @Output() onItemClick = new EventEmitter();
    @Output() onFavorite = new EventEmitter();

    isHeaderVisible = false;
    viewEntered = false;

    selectedItem = 'Page1';
  
    constructor() { }

    ngAfterViewInit() {
      this.viewEntered = true;    
    }

    ngOnChanges(changes: { [propKey: string]: any }) {
      this.data = changes['data'].currentValue;
    }

    onItemClickFunc(params) {
      if (event) {
        event.stopPropagation();
      }
      this.onItemClick.emit(params);
    }

    onFavoriteFunc(params) {
      if (event) {
        event.stopPropagation();
      }
      params.favorite = !params.favorite
      this.onFavorite.emit(params);
    }

    scrolling(event) {
      setTimeout(()=> {
        this.isHeaderVisible = event.detail.currentY > 250
      })
    }

    isEnabled(value: string): boolean {
      return this.selectedItem === value;
    }
}
