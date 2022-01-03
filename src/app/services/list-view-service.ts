import { IService } from './IService';

export class ListViewService implements IService {

  constructor() { }

  getId = (): string => 'listViews';

  getTitle = (): string => 'List views';

  // Submenu for list
  getAllThemes = (): Array<any> => {
    return [
      { 'url': 'subitems/expandable', 'title': 'Expandable', 'theme': 'expandable' },
      { 'url': 'subitems/dragAndDrop', 'title': 'Drag&Drop', 'theme': 'dragAndDrop' },
      { 'url': 'subitems/swipeToDismiss', 'title': 'Swipe-to-dismiss', 'theme': 'swipeToDismiss' },
      { 'url': 'subitems/googleCards', 'title': 'Google Cards', 'theme': 'googleCards' },
    ];
  }

  getDataForTheme = (menuItem: any): Array<any> => {
    return [];
  }

  load(url: string) {
    return null;
  }
}
