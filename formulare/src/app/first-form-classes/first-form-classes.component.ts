import { Component } from '@angular/core';
import {Task} from '../models/model-classes';

@Component({
  selector: 'pjm-first-form-classes',
  templateUrl: 'first-form-classes.component.html',
})
export class FirstFormClassesComponent {
  task: Task | undefined;
  saveTask(value: any) {
    this.task = new Task(value);
    console.log(this.task);
  }

}
