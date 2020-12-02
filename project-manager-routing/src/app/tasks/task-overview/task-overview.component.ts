import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Task} from '../../models/model-interfaces';
import {TaskService} from '../../services/task-service/task-service';
import * as model from '../../models/model-interfaces';


@Component({
  selector: 'task-overview',
  templateUrl: 'task-overview.component.html',
  styleUrls: ['task-overview.component.css'],
})
export class TaskOverviewComponent implements OnInit {

  model = model;

  private task: Task;

  constructor(private route: ActivatedRoute,
              private taskService: TaskService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.task = this.taskService.getTask(params['id']);
    });
  }
}
