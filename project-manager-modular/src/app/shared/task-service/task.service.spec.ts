import {TestBed, inject, fakeAsync} from '@angular/core/testing';
import { BaseRequestOptions, Http, ConnectionBackend, Response, ResponseOptions, RequestMethod } from '@angular/http';
import {TaskService} from './task.service';
import {MockBackend} from '@angular/http/testing/mock_backend';
import {TaskStore} from '../stores/task.store';
import {SOCKET_IO} from '../../app.tokens';
import {mockIO} from '../../mocks/mock-socket';

describe('Task-Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TaskService,
        TaskStore,
        {provide: SOCKET_IO, useValue: mockIO},
        BaseRequestOptions,
        MockBackend,
        {provide: Http, useFactory: (mockBackend: ConnectionBackend,
                       defaultOptions: BaseRequestOptions) => {
            return new Http(mockBackend, defaultOptions);
          }, deps: [MockBackend, BaseRequestOptions]},
      ]
    });
  });

  let taskService: TaskService;
  let taskStore: TaskStore;
  let mockBackend: MockBackend;

  beforeEach(inject([TaskService, TaskStore, MockBackend],
    (_taskService, _taskStore, _mockBackend) => {
      taskService = _taskService;
      taskStore = _taskStore;
      mockBackend = _mockBackend;
    })
  );

  const saveTask = (task, expectedUrl = null, expectedMethod = null) => {
    mockBackend.connections.subscribe(connection => {
      if (expectedUrl) {
        expect(connection.request.url).toBe(expectedUrl);
      }
      if (expectedMethod) {
        expect(connection.request.method).toBe(expectedMethod);
      }
      const response = new ResponseOptions({body: JSON.stringify(task)});
      connection.mockRespond(new Response(response));
    });
    taskService.saveTask(task).subscribe();
  };

  it('should trigger a HTTP-POST for new Tasks', (() => {
    const task = {title: 'Task 1'};
    mockBackend.connections.subscribe(connection => {
      const expectedUrl = 'http://localhost:3000/api/tasks/';
      expect(connection.request.url).toBe(expectedUrl);
      expect(connection.request.method).toBe(RequestMethod.Post);
      const response = new ResponseOptions({body:  JSON.stringify(task)});
      connection.mockRespond(new Response(response));
    });
    taskService.saveTask(task).subscribe();
  }));

  it('should trigger a HTTP-POST for new Tasks', (() => {
    const task = {title: 'Task 1'};
    saveTask(task, 'http://localhost:3000/api/tasks/', RequestMethod.Post);
  }));

  it('should do a HTTP-Put for existing Tasks', (() => {
    const task = {id: 1, title: 'Existing Task'};
    saveTask(task, 'http://localhost:3000/api/tasks/1', RequestMethod.Put);
  }));

  it('should add the Task to the store', (() => {
    const spy = spyOn(taskStore, 'dispatch');
    saveTask({title: 'Task 1'});
    const dispatchedAction =  spy.calls.mostRecent().args[0];
    expect(dispatchedAction.type).toEqual('ADD');
    expect(dispatchedAction.data.title).toEqual('Task 1');
  }));

  it('should save the Task in store', (() => {
    const spy = spyOn(taskStore, 'dispatch');
    saveTask({id: 1, title: 'Task 1'});
    const dispatchedAction =  spy.calls.mostRecent().args[0];
    expect(dispatchedAction.type).toEqual('EDIT');
    expect(dispatchedAction.data.title).toEqual('Task 1');
  }));

});