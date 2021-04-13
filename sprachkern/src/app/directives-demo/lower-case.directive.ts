import {HostListener, HostBinding, Directive} from '@angular/core';

@Directive({
  selector: '[chLowerCase]'
})
export class LowerCaseDirective {
  @HostBinding() value = '';

  @HostListener('change', ['$event']) onChange($event) {
    this.value = $event.target.value.toLowerCase();
  }
}

@Directive({
  selector: 'chInput[lower]',
  host: {
    '(change)': 'onChange($event)',
    '[value]': 'value'
  }
})
export class LowerCaseCanonicalDirective {
  value = '';
  onChange($event) {
    this.value = $event.target.value.toLowerCase();
  }
}
