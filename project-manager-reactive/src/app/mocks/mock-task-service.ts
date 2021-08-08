import { BehaviorSubject, Observable, of } from 'rxjs';
import {Task} from '../models/model-interfaces';

export class MockTaskService {
  selectTasks(): Observable<Task[]> {
    return of([]);
  }

  findTasks(query: string) {
    return new BehaviorSubject<Task[]>([]);
  }

  saveTask(task: Task) {
  }

  deleteTask(task: Task) {
    return new BehaviorSubject<Task>({});
  }

  getTask(id: number | string) {
    return new BehaviorSubject<Task>({});
  }
}
