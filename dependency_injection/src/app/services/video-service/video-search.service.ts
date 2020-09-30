import {Injectable} from '@angular/core';
import {SearchService} from '../search-service/search.service';
import videos from './videos';

@Injectable()
export class VideoSearchService implements SearchService {

  videos: any[];

  constructor() {
    this.videos = videos;
  }

  getAll(): any[] {
    return this.videos;
  }

  search(keyword): any[] {
    return this.videos.filter((video) => video.Title.startsWith(keyword));
  }

}
