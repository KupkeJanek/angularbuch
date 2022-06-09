import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, UntypedFormControl } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { merge, Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/internal/operators';
import { debounceTime, switchMap, tap } from 'rxjs/operators';
import { AbstractCacheService } from '../../cache/abstract-cache.service';
import { Task } from '../../shared/models/model-interfaces';
import { TaskService } from '../../shared/task-service/task.service';
import { SuperSecretCalculationService } from '../../super-secret-calculation.service';
import { TaskItemComponent } from './task-item.component';


@Component({
  selector: 'pjm-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  standalone: true,
  imports: [CommonModule,RouterModule, ReactiveFormsModule, TaskItemComponent]
})
export class TaskListComponent implements OnInit {

  selectedTaskId: string | number | null = null;

  tasks$!: Observable<Task[]>;

  searchTerm = new UntypedFormControl();

  constructor(private taskService: TaskService,
              private router: Router,
              private route: ActivatedRoute,
              private cacheService: AbstractCacheService,
              private secretService: SuperSecretCalculationService,
              private location: Location) {
  }

  ngOnInit() {

    console.log(this.cacheService.get('ANSWER'));

    this.tasks$ = this.taskService.tasks$;

    const paramsStream = this.route.queryParams
      .pipe(
        map(params => decodeURI(params['query'] || '')),
        tap(query => this.searchTerm.setValue(query)));

    const searchTermStream = this.searchTerm.valueChanges.pipe(
      debounceTime(400),
      tap(query => this.adjustBrowserUrl(query))
    );

    merge(paramsStream, searchTermStream)
      .pipe(
        distinctUntilChanged(),
        switchMap(query => this.taskService.findTasks(query)))
      .subscribe();
  }


  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe();
  }

  selectTask(taskId: string | number) {
    this.selectedTaskId = taskId;
    this.router.navigate([{outlets: {'right': ['overview', taskId]}}], {relativeTo: this.route});
  }

  findTasks(queryString: string) {
    // jetzt über type-ahead gelöst
    // this.tasks$ = this.taskService.findTasks(queryString);
    // this.adjustBrowserUrl(queryString);
  }

  adjustBrowserUrl(queryString = '') {
    const absoluteUrl = this.location.path().split('?')[0];
    const queryPart = queryString !== '' ? `query=${queryString}` : '';

    this.location.replaceState(absoluteUrl, queryPart);
  }

}
