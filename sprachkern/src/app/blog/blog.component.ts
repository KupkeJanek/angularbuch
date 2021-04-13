import {Component} from '@angular/core';
import {BlogEntry} from './blog-entry';

@Component({
  selector: 'ch-blog',
  templateUrl: 'blog.component.html',
    styleUrls: ['blog.component.css'],
})
export class BlogComponent {

  entries: BlogEntry[] = [];

  constructor() {
    this.entries = [{
        title: 'Angular 7 erschienen',
        image: 'data:image/png;base64,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',
        text: 'Die neue Version wartet mit einigen interessanten Features und mit deutlichen Performance-Verbesserungen auf...'
    },
        {
            title: 'ECMAScript 2018 Standard veröffentlicht',
            image: 'https://cdn-images-1.medium.com/max/1000/1*RQFLsbQumE-iNrXzs_Oz8g.jpeg',
            text: 'Neben Asynchronous Iterators hat die im Juni veröffentlichte neunte Version des Standards eine handvoll weiterer Features an Bord...'
        }];
  }
}
