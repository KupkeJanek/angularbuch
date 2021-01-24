import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {TabsModule} from './tabs/tabs.module';
import { TranslationTechniquesComponent } from './translation-techniques/translation-techniques.component';
import { PluralizationComponent } from './pluralization/pluralization.component';
import {TodoCounterComponent} from './todo-counter/todo-counter.component';
import {TodoItemComponent} from './todo-item/todo-item.component';
import { GenderComponent } from './gender/gender.component';

@NgModule({
  declarations: [
    AppComponent,
    TranslationTechniquesComponent,
    PluralizationComponent,
    TodoCounterComponent,
    TodoItemComponent,
    GenderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
