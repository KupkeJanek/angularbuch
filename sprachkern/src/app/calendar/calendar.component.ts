import {Component, ViewChild, AfterViewInit, QueryList, ViewChildren} from '@angular/core';
import {TimePickerComponent} from '../time-picker/time-picker.component';
import {Time} from '../time-picker/time.model';

@Component({
  selector: 'ch-calendar',
  templateUrl: 'calendar.component.html',
  styleUrls: ['calendar.component.css'],
})
export class CalendarComponent implements AfterViewInit {
  calendarEntry: any;

   @ViewChildren(TimePickerComponent) timePickers!: QueryList<TimePickerComponent>;

  //@ViewChild(TimePickerComponent) timePicker: TimePickerComponent;
  @ViewChild('timepicker') timePicker!: TimePickerComponent;

  constructor() {
    this.calendarEntry = {
      startTime: '23:12:55'
    };
  }

  ngAfterViewInit() {
    console.log(this.timePickers);
    console.log('Ausgewählte Zeit: ' + this.timePicker.getTime());
  }

  /* ohne Verwendung des Two-Way Databindings: */
  onTimeChanged(time: string){
    console.log("Time changed: ", time);
    this.calendarEntry.startTime = time;
  }

}
