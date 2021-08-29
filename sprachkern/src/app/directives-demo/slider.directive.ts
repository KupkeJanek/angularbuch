import {Input, ElementRef, Output, Directive, EventEmitter, OnChanges} from '@angular/core';

declare var jQuery: any;

@Directive({
  selector: '[chSlider]'
})
export class SliderDirective implements OnChanges {
  sliderRef: any;
  @Input() value?: number;
  @Output() valueChange = new EventEmitter();

  constructor(private elementRef: ElementRef) {
    this.sliderRef = jQuery(this.elementRef.nativeElement).slider({
      slide: (event: any, ui: any) => {
        // console.log(ui.value); // Einkommentierung um Werte in der Console zu loggen
        this.valueChange.emit(ui.value);
      }
    });
  }
  ngOnChanges() {
    this.sliderRef.slider('option', {value: this.value});
  }
}

