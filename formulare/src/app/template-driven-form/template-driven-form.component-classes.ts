import {ViewChild, Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Task, Tag} from '../models/model-classes';
import * as model from '../models/model-interfaces';
import {TaskService} from '../services/task-service/task.service';


@Component({
  selector: 'pjm-template-driven-form-classes',
  templateUrl: 'template-driven-form.component.html',
})
export class TemplateDrivenFormComponentClasses {

  model = model;

  task: Task = new Task();

  @ViewChild(NgForm) ngForm!: NgForm;

  constructor(private taskService: TaskService) {
  }

  addTag() {
    this.task.tags.push(new Tag(''));
    return false;
  }

  removeTag(i: number) {
    this.task.tags.splice(i, 1);
    return false;
  }

  saveTask(value: any) {
    this.task = new Task(value);
    console.log(this.task);
  }

}
