import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {AnimationEvent} from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class RouterAnimationEventsService {

  private animationEvents$ = new Subject<AnimationEvent>();

  dispatchEvent(event: AnimationEvent) {
    this.animationEvents$.next(event);
  }

  listenForEvents(): Observable<AnimationEvent> {
    return this.animationEvents$.asObservable();
  }
}
