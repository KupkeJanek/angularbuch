import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {createCustomElement} from '@angular/elements';
import {ButtonChooserModule} from '../../../button-chooser/src/lib/button-chooser.module';
import {ButtonChooserBridgeComponent} from './button-chooser-bridge/button-chooser-bridge.component';

@NgModule({
  declarations: [AppComponent, ButtonChooserBridgeComponent],
  imports: [BrowserModule, ButtonChooserModule],
  entryComponents: [AppComponent, ButtonChooserBridgeComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const appElement = createCustomElement(AppComponent, {
      injector: this.injector
    });
    customElements.define('my-first-angular-element', appElement);

    const bcElement = createCustomElement(ButtonChooserBridgeComponent, {
      injector: this.injector
    });
    customElements.define('ch-button-chooser-component', bcElement);
  }
}
