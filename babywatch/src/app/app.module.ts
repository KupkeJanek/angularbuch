import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {TimelineComponent} from './timeline/timeline.component';
import {SettingsComponent} from './settings/settings.component';

import {LOCALE_ID} from '@angular/core';
import de from '@angular/common/locales/de';
import {registerLocaleData} from '@angular/common';

registerLocaleData(de);

import {HttpClientModule} from '@angular/common/http';
import {DomSanitizer} from '@angular/platform-browser';
import {AddEventComponent} from './add-event/add-event.component';
import {FormsModule} from '@angular/forms';
import {DeleteTimelineDialogComponent} from './delete-timeline-dialog/delete-timeline-dialog.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    SettingsComponent,
    AddEventComponent,
    DeleteTimelineDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    HttpClientModule,
    MatBottomSheetModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'de-de'}],
  bootstrap: [AppComponent],
  entryComponents: [AddEventComponent, DeleteTimelineDialogComponent]
})
export class AppModule {
  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    this.iconRegistry.addSvgIcon(
      'feed',
      this.sanitizer.bypassSecurityTrustResourceUrl('../assets/feed.svg')
    );
    this.iconRegistry.addSvgIcon(
      'bath',
      this.sanitizer.bypassSecurityTrustResourceUrl('../assets/bath.svg')
    );
    this.iconRegistry.addSvgIcon(
      'diaper',
      this.sanitizer.bypassSecurityTrustResourceUrl('../assets/diaper.svg')
    );
    this.iconRegistry.addSvgIcon(
      'sleep',
      this.sanitizer.bypassSecurityTrustResourceUrl('../assets/sleep.svg')
    );
  }
}
