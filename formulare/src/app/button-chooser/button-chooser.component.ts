import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Choice, Question} from './models/question';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'pjm-button-chooser',
  templateUrl: './button-chooser.component.html',
  styleUrls: ['./button-chooser.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: ButtonChooserComponent,
      multi: true,
    }]
})
export class ButtonChooserComponent implements ControlValueAccessor  {
  @Input() choices: string[];

  private value: any;
  private propagateChange = Function.prototype;
  private propagateTouched = Function.prototype;

  public writeValue(value: any) {
      this.value = value;
  }

  public registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  public registerOnTouched(fn: any) {
    this.propagateTouched = fn;
  }

  changeValue(value: string) {
    this.value = value;
    this.propagateChange(this.value);
    this.propagateTouched();
    return false;
  }
}
