import { IService } from './IService';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingService } from './loading-service';

@Injectable({ providedIn: 'root' })
export class SpinnerService implements IService {

  constructor(private loadingService: LoadingService) { }

  getTitle = (): string => 'Spinners';

  getAllThemes = (): Array<any> => {
    return [
      { 'url': 'spinner/0', 'title': 'Default Svg Icons', 'theme': 'native' },
      { 'url': 'spinner/1', 'title': 'Custom Svg Icons', 'theme': 'custom' }
    ];
  }

  getDataForTheme = (menuItem: any): any => {
    return this[
      'getDataFor' +
      menuItem.theme.charAt(0).toUpperCase() +
      menuItem.theme.slice(1)
    ]();
  }

  //* Data Set for page 1
  getDataForCustom = (): Array<any> => {
    return [
      { 'icon': 'audio', 'name': 'Audio' },
      { 'icon': 'ball-triangle', 'name': 'Ball-triangle' },
      { 'icon': 'bars', 'name': 'Bars' },
      { 'icon': 'grid', 'name': 'Grid' },
      { 'icon': 'hearts', 'name': 'Hearts' },
      { 'icon': 'oval', 'name': 'Oval' },
      { 'icon': 'puff', 'name': 'Puff' },
      { 'icon': 'three-dots', 'name': 'Three-dots' }
    ];
  }

  //* Data Set for page 2
  getDataForNative = (): Array<any> => {
    return [
      { 'icon': 'lines', 'name': 'Lines' },
      { 'icon': 'lines-small', 'name': 'Lines-small' },
      { 'icon': 'dots', 'name': 'Dots' },
      { 'icon': 'bubbles', 'name': 'Bubbles' },
      { 'icon': 'circles', 'name': 'Circles' }
    ];
  }

  load(item: any): Observable<any> {
    this.loadingService.show();
    return new Observable(observer => {
      this.loadingService.hide();
      observer.next(this.getDataForTheme(item));
      observer.complete();
    });
  }
}
