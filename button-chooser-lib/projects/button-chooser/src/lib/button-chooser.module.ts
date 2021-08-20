import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonChooserComponent } from './button-chooser.component';
import { ButtonChooserBemComponent } from './button-chooser-bem/button-chooser-bem.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ButtonChooserComponent, ButtonChooserBemComponent],
  exports: [ButtonChooserComponent, ButtonChooserBemComponent]
})
export class ButtonChooserModule { }
