import {Component, Inject} from '@angular/core';
import {BlogEntry} from './blog-entry';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  entries: BlogEntry[] = [];

  constructor(@Inject('random-value') randomValue: number) {
    console.log(randomValue)
  }

  createBlogEntry(title:string, image:string, text:string) {
    let entry = new BlogEntry();
    entry.title = title;
    entry.image = image;
    entry.text = text;

    this.entries.push(entry);
  }
}

