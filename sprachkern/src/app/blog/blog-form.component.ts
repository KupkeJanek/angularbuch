import {
  Component, Output, EventEmitter, TemplateRef, ContentChild
} from '@angular/core';
import {BlogEntry} from './blog-entry';

@Component({
  selector: 'ch-blog-form',
  templateUrl: 'blog-form.component.html',
  styleUrls: ['blog-form.component.css']
})
export class BlogFormComponent {

  @Output() entryCreated = new EventEmitter();
  @ContentChild(TemplateRef) customTemplate?: TemplateRef<any>;

  createBlogEntry(title: string, image: string, text: string) {
    // in einer echten Anwendung würde hier ein HTTP-Service angesprochen
    this.entryCreated.emit(new BlogEntry(title, image, text));
  }

}
