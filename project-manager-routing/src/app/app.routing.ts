import {Routes, RouterModule, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import {SettingsComponent} from './settings/settings.component';
import {AboutComponent} from './about/about.component';
import {LoginComponent, LoginGuard, UserResolver} from './login/index';
import {NotFoundComponent} from './not-found/not-found.component';
import {tasksRoutes, tasksRoutingComponents} from './tasks/tasks.routing';
import {ChatComponent} from './chat-component/chat.component';
import {RESOLVED_TOKEN} from './app.tokens';

export const appRoutes: Routes = [
  {path: 'dashboard', component: DashboardComponent, data: {title: 'Startseite'}}, // Dashboard unter /dashboard
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {
    path: 'settings', component: SettingsComponent,
    data: {
      title: 'Einstellungen'
    },
    resolve: {
      user: UserResolver,
      token: RESOLVED_TOKEN
    }
  },

  {path: 'about', component: AboutComponent, data: {title: 'Über uns'}},
  {path: 'login', component: LoginComponent},

  {path: 'chat', component: ChatComponent, outlet: 'bottom'},

  {path: 'tasks', canActivate: [LoginGuard], children: tasksRoutes},


  /** Redirect Konfigurationen **/
  {path: '**', component: NotFoundComponent}, // immer als letztes konfigurieren - erste Route die matched wird angesteuert
];

export const appRouting = RouterModule.forRoot(appRoutes);

export const routingComponents = [DashboardComponent, SettingsComponent, AboutComponent, LoginComponent, ChatComponent, NotFoundComponent,
                                 ...tasksRoutingComponents];

export function resolveToken(route: ActivatedRouteSnapshot,
                      state: RouterStateSnapshot) {
  return localStorage.getItem('token');
}

export const routingProviders = [
  { provide: RESOLVED_TOKEN, useValue: resolveToken}
];

