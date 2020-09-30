import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    forwardRef,
    Input,
    Output,
    ViewEncapsulation
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'ch-button-chooser',
  templateUrl: './button-chooser.component.html',
  styleUrls: ['./button-chooser.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ButtonChooserComponent),
      multi: true,
    }]
})
export class ButtonChooserComponent implements ControlValueAccessor  {

  constructor(private cd: ChangeDetectorRef) {}

  @Input() choices: string[];

  @Input() value: any;
  @Output() valueChanged = new EventEmitter<any>();

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
    this.valueChanged.emit(this.value);
    this.cd.detectChanges();
    return false;
  }
}
