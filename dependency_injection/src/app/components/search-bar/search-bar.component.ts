import {Component, Inject, Host} from '@angular/core';
import {SearchService} from '../../services/search-service/search.service';


@Component({
  selector: 'ch-search-bar',
//  providers: [MusicSearchService],
  template: `
    <label>Suche</label>
    <input type="text" #query (keyup.enter)="search(query.value)" />
    <button (click)="search(query.value)">Suchen</button>`,
})
export class SearchBarComponent {
  results: any[];
  searchService: SearchService;
  constructor(@Host() @Inject(SearchService) searchService: SearchService) {
    this.searchService = searchService;
    this.results = searchService.getAll();
  }
  search(searchQuery) {
    this.results = this.searchService.search(searchQuery);
  }
}
