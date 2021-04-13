import {NgModule} from '@angular/core';
import {BrowserModule, BrowserTransferStateModule, Title} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {LoginService} from './services/login-service/login-service';
import {appRouting, routingComponents} from './app.routing';
import * as io from 'socket.io-client';
import {AUTH_ENABLED, SOCKET_IO} from './app.tokens';
import {environment} from '../environments/environment';
import {mockIO} from './mocks/mock-socket';
import {SharedModule} from './shared/shared-module';

export function socketIoFactory() {
  if (environment.e2eMode) {
    return mockIO;
  }
  return io;
}

const enableAuthentication = !environment.e2eMode;

@NgModule({
  imports: [BrowserModule.withServerTransition({ appId: 'serverApp' }),     BrowserTransferStateModule,
  SharedModule.forRoot(), appRouting],
  providers: [LoginService,
    Title,
    {provide: AUTH_ENABLED, useValue: enableAuthentication},
    {provide: SOCKET_IO, useFactory: socketIoFactory},
  ],
  declarations: [AppComponent, routingComponents],
  bootstrap: [AppComponent]
})
export class AppModule {
}
