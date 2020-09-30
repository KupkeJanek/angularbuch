import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {TabsComponent, TabComponent} from './tabs.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [ TabsComponent, TabComponent],
  exports: [TabsComponent, TabComponent]
})
export class TabsModule {
}
