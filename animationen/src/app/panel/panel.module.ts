import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PanelComponent, PanelHeaderDirective} from './panel.component';
import {Accordion} from './accordion.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [PanelComponent, PanelHeaderDirective, Accordion],
  exports: [PanelComponent, PanelHeaderDirective, Accordion],
})
export class PanelModule {
}
