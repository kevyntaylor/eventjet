import { Component, Output, EventEmitter, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'cs-profile-layout-5',
  templateUrl: 'profile-layout-5.page.html',
  styleUrls: ['profile-layout-5.page.scss'],
})
export class ProfileLayout5Page implements OnChanges {
  @Input() data: any;

  @Output() onFacebook = new EventEmitter();
  @Output() onTwitter = new EventEmitter();
  @Output() onInstagram = new EventEmitter();

  description: String;
  index = 0;

  constructor() { }

  ngOnChanges(changes: { [propKey: string]: any }) {
    this.data = changes['data'].currentValue;
  }

  onFacebookFunc(item) {
    if (event) {
      event.stopPropagation();
    }
    this.onFacebook.emit(item);
  }

  onTwitterFunc(item, event) {
    if (event) {
      event.stopPropagation();
    }
    this.onTwitter.emit(item);
  }

  onInstagramFunc(item, event) {
    if (event) {
      event.stopPropagation();
    }
    this.onInstagram.emit(item);
  }

    toggleGroup(group: any) {
      if (event) {
        event.stopPropagation();
      }
      group.show = !group.show;
    }
}
