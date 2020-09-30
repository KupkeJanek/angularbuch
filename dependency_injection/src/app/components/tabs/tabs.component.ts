import {Component, ContentChildren, QueryList, AfterContentInit} from '@angular/core';

@Component({
  selector: 'ch-tab',
  inputs: ['title'],
  template: `<div *ngIf="active" class="tab-content">
                 <ng-content></ng-content>
             </div>`
})
export class TabComponent {
  active: boolean;
  constructor() {
    this.active = false;
  }
}

@Component({
  selector: 'ch-tabs',
  styleUrls: ['tabs.component.css'],
  templateUrl: 'tabs.component.html'})
export class TabsComponent implements AfterContentInit {

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  ngAfterContentInit() {
    this.tabs.first.active = true;
  }

  activate(tab_) {
    for (const tab of this.tabs.toArray()) {
      tab.active = false;
    }
    tab_.active = true;
  }
}

export const TABS_DIRECTIVES = [TabsComponent, TabComponent];
