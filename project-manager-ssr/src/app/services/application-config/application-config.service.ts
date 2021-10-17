import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {Inject, Injectable, Optional} from '@angular/core';
import {ApplicationConfig} from './application-config';
import {HOST} from '../../app.tokens';

@Injectable({providedIn: 'root'})
export class ApplicationConfigService {
  private applicationConfig: ApplicationConfig;

  constructor(private http: HttpClient, @Optional() @Inject(HOST) private host) {
  }

  loadConfig() {
    console.log(this.host)

    return this.http.get<ApplicationConfig>((this.host ?? '') + '/assets/config/config.json').pipe(
      tap(config => this.applicationConfig = config),
    );
  }

  getApplicationConfig(): ApplicationConfig {
    return {...this.applicationConfig};
  }
}
