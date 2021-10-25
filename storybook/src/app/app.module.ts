import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ColoredCircleComponent } from './colored-circle/colored-circle.component';
import { PanelModule } from './panel/panel.module';

@NgModule({
  declarations: [
    AppComponent,
    ColoredCircleComponent
  ],
  imports: [
    BrowserModule,
    PanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
