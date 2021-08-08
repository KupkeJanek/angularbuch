import {TaskService} from '../../services/task-service/task.service';

import {RouterTestingModule} from '@angular/router/testing';

import {BehaviorSubject} from 'rxjs';

import {TestBed, inject, fakeAsync, tick} from '@angular/core/testing';
import {TaskItemComponent} from './task-item.component';
import {TaskListComponent} from './task-list.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MockTaskService} from '../../mocks/mock-task-service';
import {setInputValue} from '../../testing/test-helper';
import { Task } from '../../models/model-interfaces';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 4000;

describe('TaskList Component', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, RouterTestingModule.withRoutes([])],
      declarations: [TaskListComponent, TaskItemComponent],
      providers: [
        {provide: TaskService, useClass: MockTaskService},
      ]
    });
  });

  let taskService: TaskService;
  beforeEach(inject([TaskService], (_taskService: TaskService) => {
    taskService = _taskService;
  }));

  it('should display TaskItems in the List', () => {
    const fixture = TestBed.createComponent(TaskListComponent);
    const element = fixture.nativeElement;

    const selectSpy = spyOn(taskService, 'selectTasks');
    selectSpy.and.returnValue(new BehaviorSubject<Task[]>([
      {id: 1, title: 'Task1', description: 'Hello Karma'},
      {id: 2, title: 'Task2', description: 'Hello Jasmine'}
    ]));
    fixture.detectChanges(); // trigger change detection

    expect(element.querySelectorAll('.task-list-entry').length).toBe(2);
    expect(element.querySelector('.task-list-entry').textContent)
      .toContain('Hello Karma');
  });

  it('should display TaskItems in the List (with TestBed.inject)', () => {
    const fixture = TestBed.createComponent(TaskListComponent);
    const taskService_ = TestBed.inject(TaskService);
    const element = fixture.nativeElement;

    const selectSpy = spyOn(taskService_, 'selectTasks');
    selectSpy.and.returnValue(new BehaviorSubject<Task[]>([
      {id: 1, title: 'Task1', description: 'Hello Karma'},
      {id: 2, title: 'Task2', description: 'Hello Jasmine'}
    ]));

    fixture.detectChanges(); // trigger change detection

    expect(element.querySelectorAll('.task-list-entry').length).toBe(2);
    expect(element.querySelector('.task-list-entry').textContent)
      .toContain('Hello Karma');
  });

  it('should call deleteTask when clicking the trash-bin', fakeAsync(() => {
    const fixture = TestBed.createComponent(TaskListComponent);

    // Task-Liste füllen
    const task = {id: 42, title: 'Task 1'};

    const selectSpy = spyOn(taskService, 'selectTasks');
    selectSpy.and.returnValue(new BehaviorSubject<Task[]>([task]));

    fixture.detectChanges(); // trigger change detection

    // Spy programmieren
    const deleteSpy = spyOn(taskService, 'deleteTask');
    deleteSpy.and.returnValue(new BehaviorSubject<any>({}));

    // Task löschen
    const trash = fixture.nativeElement.querySelector('.glyphicon-trash');
    trash.click();

    // Spy auswerten
    const deleteArguments = deleteSpy.calls.mostRecent().args;
    expect(deleteArguments[0]).toBe(task);
    expect(taskService.deleteTask).toHaveBeenCalledWith(task);
  }));

  it('should call the backend to load tasks when user types in typeahead', fakeAsync(() => {
    const fixture = TestBed.createComponent(TaskListComponent);
    fixture.detectChanges();

    // Spy programmieren
    const spy = spyOn(taskService, 'findTasks');
    spy.and.returnValue(new BehaviorSubject<any>({}));

    const searchInput = fixture.nativeElement.querySelector('#search-tasks');

    const searchTerm = 'Entwickler';
    setInputValue(searchInput, searchTerm);
    tick(400);

    // Spy auswerten
    const findArguments = spy.calls.mostRecent().args;
    expect(findArguments[0]).toBe(searchTerm);
  }));


});
