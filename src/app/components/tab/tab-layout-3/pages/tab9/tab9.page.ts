import { Component, OnChanges, Output, EventEmitter } from '@angular/core';
import { TabsService } from './../../../../../services/tabs-service';

@Component({
  selector: 'app-tab9',
  templateUrl: 'tab9.page.html',
  styleUrls: ['tab9.page.scss'],
  providers: [TabsService]
})
export class Tab9Page implements OnChanges {

  data = {}

  @Output() onRates = new EventEmitter();
  @Output() onLike = new EventEmitter();
  @Output() onFavorite = new EventEmitter();
  @Output() onShare = new EventEmitter();

  constructor(private service: TabsService) {
    this.service.load('tab9').subscribe(d => {
      this.data = d;
    });
  }

  ngOnChanges(changes: { [propKey: string]: any }) {
    this.data = changes['data'].currentValue;
  }

  onLikeFunc(params) {
    if (event) {
      event.stopPropagation();
    }
    this.onLike.emit(params);
  }

  onFavoriteFunc(params) {
    if (event) {
      event.stopPropagation();
    }
    this.onFavorite.emit(params);
  }

  onShareFunc(params) {
    if (event) {
      event.stopPropagation();
    }
    this.onShare.emit(params);
  }

}
