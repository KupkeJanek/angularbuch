import {AfterContentInit, Component, ContentChildren, Input, QueryList} from '@angular/core';
import {animate, AnimationEvent, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'ch-tab',
  styleUrls: ['tabs.component.css'],
  template: `
    <div *ngIf="active" class="tab-content" [@tabActive]="'active'">
      <ng-content></ng-content>
    </div>`,
  animations: [
    trigger('tabActive', [
      state('active', style({transform: 'translateX(0%)'})),
      state('void', style({transform: 'translateX(100%)'})),
      transition(':leave', [animate('350ms ease-out')]),
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate('350ms ease-in')
      ]),
    ]),
  ]
})
export class TabComponent {
  @Input() title: string;
  active: boolean;


  constructor() {
    this.active = false;
  }

}

@Component({
  selector: 'ch-tabs',
  styleUrls: ['tabs.component.css'],
  templateUrl: 'tabs.component.html',
  animations: [
    trigger('tabState', [
      state('active', style({
        'opacity': '1',
        'transform': 'scaleX(1)'
      })),
      state('inactive', style({
        'opacity': '0',
        'transform': 'scaleX(0)'
      })),
      transition('active => inactive', [animate('350ms ease-out')]),
      transition('inactive => active', [animate('350ms ease-in')]),
      // transition('inactive <=> active', [animate('3350ms ease')])
    ]),
  ]
})
export class TabsComponent implements AfterContentInit {

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  ngAfterContentInit() {
    this.tabs.first.active = true;
  }

  activate(tab) {
    for (const tab of this.tabs.toArray()) {
      tab.active = false;
    }
    tab.active = true;
  }

  animationStarted(event: AnimationEvent) {
    console.log(`Animating from ${event.fromState} to ${event.toState}`);
  }

  animationEnded(event: AnimationEvent) {
    console.log(`Animation took ${event.totalTime} ms`);
  }
}
