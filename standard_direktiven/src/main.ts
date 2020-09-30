import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

registerLocaleData(localeDe);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
