import {Component} from '@angular/core';
import {MusicSearchService} from '../../services/music-search-service/music-search.service';
import {SearchService} from '../../services/search-service/search.service';

@Component({
  selector: 'ch-music-library',
  viewProviders: [{provide: SearchService, useClass: MusicSearchService }],
  templateUrl: 'music-library.component.html'
})
export class MusicLibraryComponent {

  constructor() {}

}
