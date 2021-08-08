import { Injectable } from '@angular/core';
import { Item, SearchService } from '../search-service/search.service';
import { albums } from './albums';


@Injectable()
export class MusicSearchService implements SearchService {

  items: Item[];
  constructor() {
    this.items = albums;
  }


  getAll() {
    console.log('GET ALL', this.items);
    return this.items;
  }

  search(keyword: string): Item[] {
    return this.items.filter((item) => {
      return item.title.startsWith(keyword);
    });
  }



}
