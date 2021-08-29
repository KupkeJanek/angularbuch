import {Component, Input, Output, EventEmitter, OnChanges, ViewEncapsulation, SimpleChanges} from '@angular/core';
import {Time} from './time.model';

@Component({
  selector: 'ch-time-picker',
//  inputs: ['timeString: time'],
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.css'],
   encapsulation: ViewEncapsulation.ShadowDom // bitte nur einkommentieren wenn Sie einen WebComponents-kompatiblen Browser (z.B. Chrome) verwenden!
})
export class TimePickerComponent implements OnChanges {
  time: Time = {
    hours: 0,
    minutes: 0,
    seconds: 0
  };
  maxValues: Time = {
    hours: 23,
    minutes: 59,
    seconds: 59
  };

  @Input('time') timeString?: string = '';
  @Output('timeChange') changeEvent: EventEmitter<any> = new EventEmitter<string>();

  constructor() {
    console.log(this.timeString); //undefined
    this.reset();
  }

  incrementTime(field: keyof Time) {
    const maxValue = this.maxValues[field];
    this.time[field] = (this.time[field] + 1) % (maxValue + 1);
    this.emitTimeChange();
  }

  reset() {
    this.time = {
      hours: 0,
      minutes: 0,
      seconds: 0
    };
    this.emitTimeChange();
  }

  /*ngOnInit() bei einmaliger Initialisierung*/
  ngOnChanges(changes: SimpleChanges) {
    const timeParts = this.timeString?.split(':');
    if (timeParts?.length === 3) {
      this.time = {
        hours: Math.min(parseInt(timeParts[0], 10), this.maxValues.hours),
        minutes: Math.min(parseInt(timeParts[1], 10), this.maxValues.minutes),
        seconds: Math.min(parseInt(timeParts[2], 10), this.maxValues.seconds)
      };
    }
  }

  getHours() {
    return this.time.hours;
  }

  changeTime(field: keyof Time, event: Event) {
    const inputValue = (event.target as HTMLInputElement).valueAsNumber;
    let value = Math.max(inputValue, 0);
    value = Math.min(value, this.maxValues[field]);
    this.time[field] = value;
    this.emitTimeChange();
  }

  decrementTime(field: keyof Time) {
    if (this.time[field] === 0) {
      this.time[field] = this.maxValues[field];
    } else {
      this.time[field] = this.time[field] - 1;
    }
    this.emitTimeChange();
  }

  emitTimeChange() {
    this.changeEvent.emit(this.getTime());
  }

  fillUpZeros(value: number) {
    return `0${value}`.slice(-2);
  }

  getTime() {
    const hours = this.fillUpZeros(this.time.hours);
    const minutes = this.fillUpZeros(this.time.minutes);
    const seconds = this.fillUpZeros(this.time.seconds);
    return `${hours}:${minutes}:${seconds}`;
  }

}
