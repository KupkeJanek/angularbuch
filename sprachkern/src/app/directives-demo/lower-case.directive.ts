import {HostListener, HostBinding, Directive} from '@angular/core';

@Directive({
  selector: '[chLowerCase]'
})
export class LowerCaseDirective {
  @HostBinding() value = '';

  @HostListener('change', ['$event']) onChange($event: Event) {
    this.value = ($event.target as HTMLInputElement).value.toLowerCase();
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
  onChange($event: Event) {
    this.value =  ($event.target as HTMLInputElement).value.toLowerCase();
  }
}
