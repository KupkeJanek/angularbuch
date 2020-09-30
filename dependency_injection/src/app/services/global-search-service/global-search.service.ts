import {Injectable} from '@angular/core';
import {SearchService} from '../search-service/search.service';


@Injectable()
export class GlobalSearchService implements SearchService {

  getAll() {
    return [];
  }

  search(keyword): any[] {
    return [];
  }
}
