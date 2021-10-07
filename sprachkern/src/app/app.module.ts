import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';

import {FormsModule} from '@angular/forms';
import {LogViewerComponent} from './log-viewer/log-viewer.component';
import {
  ContactCounterComponent,
  ContactListOptimizedComponent, ChangeDetectionMainOptimizedComponent, ContactEntryOptimizedComponent
} from './change-detection-demo/change-detection-demo-optimized.component';
import {
  ContactListComponent,
  ChangeDetectionMainComponent, ContactEntryComponent
} from './change-detection-demo/change-detection-demo.component';
import {TimePickerComponent} from './time-picker/time-picker.component';
import {BLOG_COMPONENTS} from './blog/index';
import {BasicOperationsComponent} from './basic-operations/basic-operations.component';
import {CalendarComponent} from './calendar/calendar.component';
import {TabsDemoComponent} from './tabs-demo/tabs-demo.component';
import {PanelDemoComponent} from './panel-demo/panel-demo.component';
import {RedCircleComponent} from './red-circle/red-circle.component';
import {StyledDialogComponent} from './styled-dialog/styled-dialog.component';
import {DirectivesDemoComponent} from './directives-demo/directives-demo.component';
import {LIFECYLE_DIRECTIVES} from './lifecycle-demo/lifecycle-demo.component';
import {BrowserModule} from '@angular/platform-browser';
import {SliderDirective} from './directives-demo/slider.directive';
import {DraggableDirective} from './directives-demo/draggable.directive';
import {LowerCaseDirective} from './directives-demo/lower-case.directive';
import {BorderDirective} from './directives-demo/border.directive';
import {
    DynamicComponentsDemoComponent,
    CircleComponent,
    DynamicDialogComponent, SquareComponent
} from './dynamic-components-demo/dynamic-components-demo.component';
import { RepeaterDirective } from './repeater/repeater.directive';
import {PanelModule} from './panel/panel.module';
import {TabsModule} from './tabs/tabs.module';
import { ComponentOutletDemoComponent } from './component-outlet-demo/component-outlet-demo.component';
import { StylingDemoComponent } from './styling-demo/styling-demo.component';
import { AwesomeUploaderComponent } from './awesome-uploader/awesome-uploader.component';
import {ColoredCircleComponent} from './circle/colored-circle.component';

@NgModule({
  imports: [BrowserModule, FormsModule, PanelModule, TabsModule],
  bootstrap: [AppComponent],
  declarations: [PanelDemoComponent,
    AppComponent,
    BLOG_COMPONENTS,
    TimePickerComponent,
    CalendarComponent,
    TabsDemoComponent,
    BasicOperationsComponent,
    BorderDirective, LowerCaseDirective, DraggableDirective, SliderDirective,
    ContactListOptimizedComponent,
    ContactEntryOptimizedComponent,
    ContactListComponent,
    ContactEntryComponent,
    ContactCounterComponent,
    LogViewerComponent,
    LIFECYLE_DIRECTIVES,
    DirectivesDemoComponent,
    StyledDialogComponent,
    RedCircleComponent,
    ChangeDetectionMainComponent,
    ChangeDetectionMainOptimizedComponent,
    CircleComponent,
    SquareComponent,
    DynamicDialogComponent,
    DynamicComponentsDemoComponent,
    RepeaterDirective,
    ComponentOutletDemoComponent,
    StylingDemoComponent,
    AwesomeUploaderComponent,
    ColoredCircleComponent,
  ], exports: [
    TimePickerComponent
  ]})
export class AppModule {
}
