import {Directive, ElementRef, Renderer2, Input, OnChanges} from '@angular/core';

@Directive({
  selector: '[chBorder]'
})

export class BorderDirective implements OnChanges{
  @Input() chBorder = 1;
  constructor(private elementRef: ElementRef,
              private renderer: Renderer2) {
  }
  ngOnChanges() {
    this.renderer.setStyle(this.elementRef.nativeElement,
      'border',
      `solid ${this.chBorder}px`);
  }
}
