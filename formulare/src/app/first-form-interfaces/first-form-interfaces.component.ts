import { Component } from '@angular/core';
import {Task} from '../models/model-interfaces';

@Component({
    selector: 'pjm-first-form-interfaces',
  templateUrl: 'first-form-interfaces.component.html',
})
export class FirstFormInterfacesComponent {

  task: Task;

  constructor() {
    this.task = {
      title: 'Neues Entwickler-Team zusammenstellen',
      description: 'Notwendige Kenntnisse Angular 2 & TypeScript'
    };
  }

  saveTask(value: Task) {
    this.task = value;
    console.log(this.task);
  }

}
