import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonChooserComponent } from './button-chooser.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ButtonChooserComponent],
  exports: [ButtonChooserComponent]
})
export class ButtonChooserModule { }
