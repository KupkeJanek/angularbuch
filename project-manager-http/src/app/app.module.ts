import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {TaskService} from './services/task-service/task.service';
import {AppComponent} from './app.component';
import {Title, BrowserModule} from '@angular/platform-browser';
import {LoginService} from './services/login-service/login-service';
import {routingComponents, routingProviders, appRouting} from './app.routing';
import {ShowErrorComponent} from './show-error/show-error.component';
import {APPLICATION_VALIDATORS} from './models/app-validators';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, HttpClientJsonpModule,

    appRouting],
  entryComponents: [AppComponent],
  providers: [LoginService,
    Title,
    TaskService,
    routingProviders
  ],
  declarations: [AppComponent,
  routingComponents,
  ShowErrorComponent,
  APPLICATION_VALIDATORS],
  bootstrap: [AppComponent]
})
export class AppModule {
}