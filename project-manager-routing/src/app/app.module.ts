import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {BrowserModule, Title} from '@angular/platform-browser';
import {appRouting, routingComponents, routingProviders} from './app.routing';
import {APPLICATION_VALIDATORS} from './models/app-validators';
import {ShowErrorComponent} from './show-error/show-error.component';
import {AUTH_ENABLED} from './app.tokens';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule,
            appRouting],
  entryComponents: [AppComponent],
  providers: [
    routingProviders,
    Title,
    {provide: AUTH_ENABLED, useValue: true}
  ],
  declarations: [AppComponent,
    routingComponents,
    ShowErrorComponent,
    APPLICATION_VALIDATORS],
  bootstrap: [AppComponent]
})
export class AppModule {
}
