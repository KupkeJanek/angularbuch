import { Component, Inject, OnInit, Optional } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs/internal/operators';
import { AUTH_ENABLED } from './app.tokens';
import { AbstractCacheService } from './cache/abstract-cache.service';
import { LoginService } from './services/login-service/login-service';
import { Task } from './shared/models/model-interfaces';
import { TaskService } from './shared/task-service/task.service';

@Component({
  selector: 'ch-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  standalone: true,
  imports: [RouterModule]
})
export class AppComponent implements OnInit {

  defaultTitle = '';

  numberInProgress = 0;

  constructor(@Optional() @Inject(AUTH_ENABLED) public authEnabled: boolean,
              private loginService: LoginService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private taskService: TaskService,
              private cacheService: AbstractCacheService,
              private titleService: Title) {
  }


  ngOnInit() {
    this.cacheService.put('ANSWER', 42);
    this.defaultTitle = this.titleService.getTitle();
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd))
      .subscribe(event => {
        this.setBrowserTitle();
      });

    this.taskService.tasks$.subscribe((tasks) => {
      this.numberInProgress = tasks.filter(
        (task: Task) => task.state === 'IN_PROGRESS').length;
    });

  }

  setBrowserTitle() {

    let title = this.defaultTitle;
    let route = this.activatedRoute;
    // firstChild gibt die Haupt-Kindroute der übergebenen Route zurück
    while (route.firstChild) {
      route = route.firstChild;
      title = route.snapshot.data['title'] || title;
    }
    this.titleService.setTitle(title);
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['login']);
    return false;
  }


}

