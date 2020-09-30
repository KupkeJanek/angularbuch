import {Directive, ElementRef, Self, Optional} from '@angular/core';
import {AlertDirective} from '../alert/alert.directive';

@Directive({
  selector: '[rwBorder]'
})
export class BorderDirective {
  constructor(private el: ElementRef, @Self() @Optional()  alert: AlertDirective) {
    const borderWidth = alert ? '3px' : '1px';
    this.el.nativeElement.style.border = 'solid ' + borderWidth;
  }
}
