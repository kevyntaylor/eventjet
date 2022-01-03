import { IService } from './IService';

export class TextViewService implements IService {

  constructor() { }

  getId = (): string => 'textViews';

  getTitle = (): string => 'Typo + small components';

  getAllThemes = (): Array<any> => {
    return [
      { 'url': 'textview', 'title': 'All', 'theme': 'all' },
    ];
  }

  getEventsForTheme = (menuItem: any): any => {
    return {};
  }

  prepareParams = (item: any) => {
    return {
      title: this.getTitle(),
      data: [],
      events: this.getEventsForTheme(item)
    };
  }

  load(url: string) {
    return null;
  }
}
