import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {PipesDemoComponent} from './pipes-demo/pipes-demo.component';
import {StandardDirektivenComponent} from './standard-direktiven/standard-direktiven.component';
import {TABS_DIRECTIVES} from './tabs/tabs.component';
import {CentimeterPipe} from './pipes/centimeter.pipe';
import {CountPipe} from './pipes/count.pipe';


@NgModule({
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    TABS_DIRECTIVES,
    StandardDirektivenComponent,
    PipesDemoComponent,
    CountPipe,
    CentimeterPipe,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'de'}
  ]
})
export class AppModule {
}
