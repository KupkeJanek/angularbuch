import {Component, Input, ViewChild, ContentChild, ChangeDetectionStrategy, SimpleChanges} from '@angular/core';
import { OnInit, OnChanges, OnDestroy, DoCheck } from '@angular/core';
import { AfterViewInit, AfterViewChecked } from '@angular/core';
import { AfterContentInit, AfterContentChecked } from '@angular/core';

function logChangeDetection(entry: string) {
  //console.debug(entry);
}

@Component({
  selector: 'ch-view-child',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<h3>View Child</h3>
             <span>Text: {{text}}</span>`,
})
export class ViewChildComponent implements OnChanges, OnInit, AfterViewChecked, AfterContentChecked {
  @Input() public text: string;
  @Input() public greeting: Greeting;

  private previousGreetingText = '';

  constructor() {
    console.log('Text: ', this.text);
  }

  ngOnInit() {
    console.log('ViewChild ngOnInit');
    console.log('Text: ', this.text);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ViewChild ngOnChanges: ', changes);
    console.log('Previous Text: ', changes.text.previousValue);
    console.log('New Value: ', changes.text.currentValue);
  }

  ngAfterViewChecked() {
    logChangeDetection('ViewChildComponent: ngAfterViewChecked');
  }

  ngAfterContentChecked() {
    logChangeDetection('ViewChildComponent: ngAfterContentChecked');
  }

  ngDoCheck() {
    if (this.greeting.text !== this.previousGreetingText) {
      this.previousGreetingText = this.greeting.text;
      console.log('New greeting text: ', this.greeting.text);
    }
  }
}

@Component({
  selector: 'ch-content-child',
  template: '<h3>Content Child</h3>',
})
export class ContentChildComponent implements AfterViewChecked, AfterContentChecked {

  ngAfterViewChecked() {
    logChangeDetection('ContentChildComponent: ngAfterViewChecked');
  }

  ngAfterContentChecked() {
    logChangeDetection('ContentChildComponent: ngAfterContentChecked');
  }
}

@Component({
  selector: 'ch-lifecycle-main',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<h2>LifeCycle-Demo</h2>
             <ch-view-child [text]='text' [greeting]="greeting"></ch-view-child> <br>
             <input type='text' [(ngModel)]='text' (input)="textChanged($event)"/>
             <ng-content></ng-content>`
})
export class LifecycleMainComponent implements AfterContentInit, AfterViewInit, OnDestroy, AfterViewChecked, AfterContentChecked, OnInit {
  @ViewChild(ViewChildComponent) viewChild: ViewChildComponent;
  @ContentChild(ContentChildComponent) contentChild: ContentChildComponent;

  text = 'Hello Lifecycle';

  greeting: Greeting = {
    text: this.text
  };

  constructor() {
    this.logChildren('constructor');
  }

  ngOnInit() {
    this.logChildren('ngOnInit');
  }

  textChanged(event: Event) {
    this.greeting.text = (event.target as HTMLInputElement).value;
  }

  logChildren(callback: string) {
    console.log(`---${callback}---`);
    console.log('ViewChild:', this.viewChild);
    console.log('ContentChild:', this.contentChild);
  }

  ngAfterViewInit() {
    this.logChildren('ngAfterViewInit');
  }

  ngAfterContentInit() {
    this.logChildren('ngAfterContentInit');
  }

  ngAfterViewChecked() {
    logChangeDetection('LifecycleMain: ngAfterViewChecked');
  }

  ngAfterContentChecked() {
    logChangeDetection('LifecycleMain: ngAfterContentChecked');
  }
  ngOnDestroy() {
    console.log('LifecycleMain Destroyed');
  }
}

@Component({
  selector: 'ch-lifecycle-demo',
  template: `
             <ch-lifecycle-main>
                <ch-content-child></ch-content-child>
            </ch-lifecycle-main>
            `
})
export class LifecycleDemoComponent {
}

interface Greeting {
  text: string;
}

export const LIFECYLE_DIRECTIVES = [LifecycleDemoComponent, LifecycleMainComponent, ContentChildComponent, ViewChildComponent];
