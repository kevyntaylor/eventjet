import { FilterPipe } from './../FilterPipe';
import { Component, Output, EventEmitter, Input, OnChanges, AfterViewInit } from '@angular/core';

@Component({
  selector: 'cs-search-bar-layout-1',
  templateUrl: 'search-bar-layout-1.page.html',
  styleUrls: ['search-bar-layout-1.page.scss'],
  providers: [FilterPipe]
})
export class SearchBarLayout1Page implements OnChanges, AfterViewInit {
  @Input() data: any;

  @Output() onItemClick = new EventEmitter();
  @Output() onTextChange = new EventEmitter();

  search: String = '';

  viewEntered = false;

  constructor() { }

  ngAfterViewInit() {
    this.viewEntered = true;    
  }

  ngOnChanges(changes: { [propKey: string]: any }) {
    this.data = changes['data'].currentValue;
  }

  onItemClickFunc(item): void {
    if (event) {
      event.stopPropagation();
    }
    this.onItemClick.emit(item);
  }

  onTextChangeFunc(item): void {
    if (event) {
      event.stopPropagation();
    }
    this.onTextChange.emit(this.search);
  }
}
