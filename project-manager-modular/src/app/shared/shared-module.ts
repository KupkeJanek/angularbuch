import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APPLICATION_VALIDATORS } from './models/app-validators';
import { ShowErrorComponent } from './show-error/show-error.component';

@NgModule({
  imports: [CommonModule, HttpClientModule, ShowErrorComponent],
  declarations: [ APPLICATION_VALIDATORS],
  exports: [CommonModule, FormsModule, HttpClientModule, ShowErrorComponent,
     APPLICATION_VALIDATORS]
})
export class SharedModule {
}
