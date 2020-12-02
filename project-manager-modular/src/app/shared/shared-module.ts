import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ShowErrorComponent} from './show-error/show-error.component';
import {APPLICATION_VALIDATORS} from './models/app-validators';
import {AbstractCacheService} from './cache/abstract-cache.service';
import {InMemoryCacheService} from './cache/in-memory-cache.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [ShowErrorComponent, APPLICATION_VALIDATORS],
  exports: [CommonModule, FormsModule,
    ShowErrorComponent, APPLICATION_VALIDATORS]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [
        {provide: AbstractCacheService, useClass: InMemoryCacheService}
      ]
    };
  }
}
