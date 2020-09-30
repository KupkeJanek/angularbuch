import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ButtonChooserModule } from 'ch-button-chooser';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ButtonChooserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
