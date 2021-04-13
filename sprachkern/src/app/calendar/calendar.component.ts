import {Component, ViewChild, AfterViewInit} from '@angular/core';
import {TimePickerComponent} from '../time-picker/time-picker.component';


@Component({
  selector: 'ch-calendar',
  templateUrl: 'calendar.component.html',
  styleUrls: ['calendar.component.css'],
})
export class CalendarComponent implements AfterViewInit {
  calendarEntry: any;

  // @ViewChildren(TimePicker) timePickers: QueryList<TimePicker>;
  // timePicker: TimePicker;

  //@ViewChild(TimePickerComponent) timePicker: TimePickerComponent;
  @ViewChild('timepicker') timePicker: TimePickerComponent;

  constructor() {
    this.calendarEntry = {
      startTime: '23:12:55'
    };
  }

  ngAfterViewInit() {
    console.log('Ausgewählte Zeit: ' + this.timePicker.getTime());
  }

  /* ohne Verwendung des Two-Way Databindings: */
  onTimeChanged(time){
    console.log("Time changed: ", time);
    this.calendarEntry.startTime = time;
  }

}
