import {BehaviorSubject} from 'rxjs';
import {Task} from '../../../models/model-interfaces';

export class MockTaskService {
  tasks$: any = new BehaviorSubject<Task[]>([]);

  findTasks() {
    return new BehaviorSubject([]);
  }

  saveTask(task: Task) {
  }

  deleteTask(task: Task) {
    return new BehaviorSubject({});
  }

  getTask(id: number | string) {
    return new BehaviorSubject({});
  }
}
