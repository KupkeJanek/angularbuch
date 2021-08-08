import {Component} from '@angular/core';
import { Item, SearchService } from '../../services/search-service/search.service';
import {VideoSearchService} from '../../services/video-service/video-search.service';

@Component({
  selector: 'ch-video-library',
  templateUrl: 'video-library.component.html',
  viewProviders: [{provide: SearchService, useClass: VideoSearchService }]
})
export class VideoLibraryComponent  {
  items: Item[];
  constructor(private searchService: SearchService) {
    this.items = this.searchService.getAll();
  }
}
