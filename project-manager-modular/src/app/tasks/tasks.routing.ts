import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from '../login/login.guard';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { EditTaskGuard } from './edit-task/edit-task.guard';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskOverviewComponent } from './task-overview/task-overview.component';
import { TasksComponent } from './tasks.component';

export const tasksRoutes: Routes = [{
  path: '', canActivate: [LoginGuard], component: TasksComponent,
  children: [
    {
      path: '',
      component: TaskListComponent
    },
    {
      path: 'edit/:id', component: EditTaskComponent,
      data: {title: 'Aufgabe bearbeiten'},
      canDeactivate: [EditTaskGuard]
    },
    {
      path: 'new', component: EditTaskComponent,
      data: {title: 'Neue Aufgabe anlegen'},
      canDeactivate: [EditTaskGuard]
    }
  ]
},
  {
    path: 'overview/:id',
    component: TaskOverviewComponent,
    outlet: 'right'
  }];

export const tasksRouting = RouterModule.forChild(tasksRoutes);
