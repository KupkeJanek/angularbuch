import { NgModule } from "@angular/core";
import { BrowserModule, BrowserTransferStateModule, Title } from "@angular/platform-browser";
import * as io from "socket.io-client";
import { environment } from "../environments/environment";
import { AppComponent } from "./app.component";
import { appRouting, routingComponents } from "./app.routing";
import { AUTH_ENABLED, SOCKET_IO } from "./app.tokens";
import { mockIO } from "./mocks/mock-socket";
import { LoginService } from "./services/login-service/login-service";
import { SharedModule } from "./shared/shared-module";
import { CacheModule } from './cache/cache.module';


export function socketIoFactory() {
  return io;
}

const enableAuthentication = false;

@NgModule({
  imports: [BrowserModule.withServerTransition({ appId: 'serverApp' }), BrowserTransferStateModule, SharedModule, CacheModule.forRoot('session-storage'), appRouting],
  providers: [
    LoginService,
    Title,
    { provide: AUTH_ENABLED, useValue: enableAuthentication },
    { provide: SOCKET_IO, useFactory: socketIoFactory },
  ],
  declarations: [AppComponent, routingComponents],
  bootstrap: [AppComponent],
})
export class AppModule { }
