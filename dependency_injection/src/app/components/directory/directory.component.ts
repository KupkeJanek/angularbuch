import {Component, Input, Optional, SkipSelf, OnInit} from '@angular/core';

@Component({
  selector: 'ch-directory',
  styleUrls: ['directory.component.css'],
  template: `
    <div>{{name}}</div>
    <div class="child">
      <ng-content></ng-content>
    </div>
  `
})
export class DirectoryComponent implements OnInit {
  @Input() name: string;
  constructor(@Optional() @SkipSelf() private parent: DirectoryComponent) {
  }
  ngOnInit() {
    const parent = this.parent ? this.parent.name : 'null';
    console.log('Name: ' + this.name + ' Parent: ' + parent);
  }
}
