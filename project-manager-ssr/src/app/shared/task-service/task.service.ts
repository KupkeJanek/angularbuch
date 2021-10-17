import {Inject, Injectable, PLATFORM_ID} from '@angular/core';

import {BehaviorSubject, fromEvent, Observable} from 'rxjs';
import {ADD, EDIT, LOAD, REMOVE, TaskStore} from '../stores/index';
import {SOCKET_IO} from '../../app.tokens';
import {HttpClient, HttpParams} from '@angular/common/http';
import {tap} from 'rxjs/internal/operators';
import {Task} from '../models/model-interfaces';
import {isPlatformBrowser, isPlatformServer} from '@angular/common';
import {makeStateKey, TransferState} from '@angular/platform-browser';
import {ApplicationConfigService} from '../../services/application-config/application-config.service';

const WEB_SOCKET_URL = 'http://localhost:3001';

const TASKS_KEY = makeStateKey<Task[]>('tasks');

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  socket?: SocketIOClient.Socket;

  tasks$: Observable<Task[]>;

  tasksChanged = new BehaviorSubject({});

  private baseUrl: string;

  constructor(private http: HttpClient, private taskStore: TaskStore,
              private applicationConfigService: ApplicationConfigService,
              @Inject(SOCKET_IO) socketIO: any,
              @Inject(PLATFORM_ID) private platformId: Object,
              private transferState: TransferState) {
    console.log('create');
    const appConfig = this.applicationConfigService.getApplicationConfig();

    this.baseUrl = `${appConfig.apiBaseUrl}/tasks`;

    this.tasks$ = taskStore.items$;
    if (isPlatformBrowser(platformId)) {
      this.socket = socketIO(WEB_SOCKET_URL);
      fromEvent(this.socket!, 'task_saved')
        .subscribe((action) => {
          this.taskStore.dispatch(action);
        });
    }
  }

  findTasks(query = '', sort = 'id', order = 'ASC') {
    const searchParams = new HttpParams()
      .append('q', query)
      .append('_sort', sort)
      .append('_order', order);

    console.log('FIND TASKS!');
    if (this.transferState.hasKey(TASKS_KEY)) {
      console.log('HAS KEY');
      const tasks = this.transferState.get(TASKS_KEY, []);
      this.taskStore.dispatch({type: LOAD, data: tasks});
      this.transferState.remove(TASKS_KEY);
    } else {
      this.http.get(this.baseUrl, {params: searchParams}).pipe(
        tap(tasks => {
          if (isPlatformServer(this.platformId)) {
            console.log('SET KEY');

            this.transferState.set(TASKS_KEY, tasks);
          }
        }),
        tap(tasks => this.taskStore.dispatch({type: LOAD, data: tasks}))
      ).subscribe();
    }

    return this.tasks$;
  }

  getTask(id: number | string): Observable<Task> {
    return this.http.get<Task>(this.baseUrl + '/' + id);
  }


  saveTask(task: Task) {
    const method = task.id ? 'PUT' : 'POST';
    return this.http.request<Task>(method, this.baseUrl + '/' + (task.id || ''), {
      body: task
    }).pipe(
      tap(savedTask => {
        this.tasksChanged.next(savedTask);
        const actionType = task.id ? EDIT : ADD;
        const action = {type: actionType, data: savedTask};
        this.taskStore.dispatch(action);
        this.socket?.emit('broadcast_task', action);
      }));
  }

  deleteTask(task: Task) {
    return this.http.delete(this.baseUrl + '/' + task.id).pipe(
      tap(_ => {
        this.taskStore.dispatch({type: REMOVE, data: task});
      }));
  }
}

