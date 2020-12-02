import {NgModule} from '@angular/core';
import {TabComponent, TabsComponent} from './tabs.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [TabsComponent, TabComponent],
  exports: [TabsComponent, TabComponent]
})
export class TabsModule {
}
