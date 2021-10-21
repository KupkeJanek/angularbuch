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
    const url = `${this.host ?? ''}/assets/config/config.json`;
    return this.http.get<ApplicationConfig>(url).pipe(
      tap(config => this.applicationConfig = config),
    );
  }

  getApplicationConfig(): ApplicationConfig {
    return {...this.applicationConfig};
  }
}
