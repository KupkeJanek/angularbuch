import {Component} from '@angular/core';
import {SearchService} from '../../services/search-service/search.service';
import {VideoSearchService} from '../../services/video-service/video-search.service';

@Component({
  selector: 'ch-video-library',
  templateUrl: 'video-library.component.html',
  viewProviders: [{provide: SearchService, useClass: VideoSearchService }]
})
export class VideoLibraryComponent  {
}
