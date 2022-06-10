import { APP_INITIALIZER, enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication, Title } from '@angular/platform-browser';
import { AppComponent, appRouting } from './app';
import { enableAuthentication, initializeApplication, socketIoFactory } from './app/app.module';
import { AUTH_ENABLED, SOCKET_IO } from './app/app.tokens';
import { CacheModule } from './app/cache/cache.module';
import { ApplicationConfigService } from './app/services/application-config/application-config.service';
import { LoginService } from './app/services/login-service/login-service';
import { SharedModule } from './app/shared/shared-module';
import { environment } from './environments/environment';


if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(SharedModule),
    importProvidersFrom(CacheModule.forRoot('session-storage')),
    importProvidersFrom(appRouting),
    LoginService,
    Title,
    { provide: AUTH_ENABLED, useValue: enableAuthentication },
    { provide: SOCKET_IO, useFactory: socketIoFactory },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApplication,
      multi: true,
      deps: [ApplicationConfigService]
    },
  ]
})

