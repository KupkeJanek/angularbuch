import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ShowErrorComponent} from './show-error/show-error.component';
import {APPLICATION_VALIDATORS} from './models/app-validators';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [ShowErrorComponent, APPLICATION_VALIDATORS],
  exports: [CommonModule, FormsModule, HttpClientModule,
    ShowErrorComponent, APPLICATION_VALIDATORS]
})
export class SharedModule {
}
