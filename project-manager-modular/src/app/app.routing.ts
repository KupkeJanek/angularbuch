import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent, LoginGuard } from './login/index';
import { NotFoundComponent } from './not-found/not-found.component';
import { SettingsComponent } from './settings/settings.component';

export const appRoutes: Routes = [
  {path: 'dashboard', component: DashboardComponent, data: {title: 'Startseite'}},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {
    path: 'settings', component: SettingsComponent, data: {title: 'Einstellungen'},
  },
  {path: 'about', component: AboutComponent, data: {title: 'Über uns'}},
  {path: 'login', component: LoginComponent},


  {
    path: 'tasks',
    loadChildren: () => import('./tasks/tasks.routing').then((m) => m.tasksRoutes),
    canLoad: [LoginGuard]
  },

  /** Redirect Konfigurationen **/
  {path: 'tasks/*', redirectTo: '/tasks'},
  {path: '404', component: NotFoundComponent},

  {path: '**', redirectTo: '/404'}, // immer als letztes konfigurieren - erste Route die matched wird angesteuert
];

export const appRouting = RouterModule.forRoot(appRoutes, {
  preloadingStrategy: PreloadAllModules
});

export const routingComponents = [];
