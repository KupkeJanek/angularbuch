import {Component, Input, TemplateRef, ContentChild} from '@angular/core';

@Component({
  selector: 'ch-blog-entry',
  template: `
    <div class="blog-entry" >
        <div class="blog-image">
            <img [src]="entry?.image" [alt]="entry?.title"/>
        </div>
        <div class="blog-summary">
            <span class="title">{{entry?.title}}</span>
            <p> {{entry?.text}}</p>
        </div>
    </div>
  `,
  styleUrls: ['blog-list.component.css']
})
export class BlogEntryComponent {
  @Input() entry: any;
}

@Component({
  selector: 'ch-blog-list',
  templateUrl: 'blog-list.component.html',
  styleUrls: ['blog-list.component.css'],
})
export class BlogListComponent {
    @Input() entries: any[];
    @ContentChild('entryTemplate') entryTemplate;
    @ContentChild('additionalMarkup') additionalMarkup;
    hasCustomTemplate: boolean;
    ngAfterContentInit() {
        this.hasCustomTemplate = this.entryTemplate != null;
    }
}
