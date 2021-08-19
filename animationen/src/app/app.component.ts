import {Component} from '@angular/core';
import {animate, AnimationEvent, group, query, style, transition, trigger} from '@angular/animations';
import {RouterAnimationEventsService} from './router-animation-events.service';

@Component({
  selector: 'ch-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routingAnimation', [
      transition('* => *', [
        group([
          query(':enter', [
              style({transform: 'translateX(-100%)'}),
              animate('0.4s ease-in', style({transform: 'translateX(0%)'}))
            ],
            {optional: true}
          ),
          query(':leave', [
              style({transform: 'translateX(0)'}),
              animate('0.4s ease-out', style({transform: 'translateX(100%)'}))
            ],
            {optional: true}
          )])
      ])
    ])
  ]
})
export class AppComponent {

  constructor(private routerAnimationEventsService: RouterAnimationEventsService) {
  }

  animationDone(event: AnimationEvent) {
    console.log(event)
    this.routerAnimationEventsService.dispatchEvent(event);
  }
}
