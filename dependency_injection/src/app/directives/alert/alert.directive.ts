import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[rwAlert]'
})
export class AlertDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.color = 'red';
    this.el.nativeElement.style['font-weight'] = 'BOLD';
  }
}
