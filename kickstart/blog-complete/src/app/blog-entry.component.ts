import {Component, Input} from '@angular/core';
import {BlogEntry} from './blog-entry';

@Component({
  selector: 'app-blog-entry',
  templateUrl: 'blog-entry.component.html'
})
export class BlogEntryComponent {
  @Input() entry?: BlogEntry;

  printEntryToConsole() {
    if (this.entry) {
      console.log('Titel: ' + this.entry.title)
    }
  }
  
  printEntryToConsole2() {
    console.log('Titel: ' + this.entry?.title)
  }
}
