import {Component} from '@angular/core';
import {SearchService} from '../../services/search-service/search.service';
import {GlobalSearchService} from '../../services/global-search-service/global-search.service';

@Component({
  selector: 'ch-main-view',
  templateUrl: 'main-view.component.html',
  styleUrls: ['main-view.component.css'],
  // providers:[ provide(SearchService, { useClass: GlobalSearchService })],
  viewProviders: [{provide: SearchService, useClass: GlobalSearchService }]
})
export class MainViewComponent {
  constructor() {}
}
