import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import {
  MatToolbarModule,
  MatInputModule,
  MatSelectModule,
  MatFormFieldModule,
  MatExpansionModule,
  MatSnackBarModule,
  MatDialogModule
} from "@angular/material";
import { MatButtonModule, MatIconModule } from "@angular/material";
import { MatSidenavModule } from "@angular/material";
import { TimelineComponent } from "./timeline/timeline.component";
import { SettingsComponent } from "./settings/settings.component";
import { MatListModule } from "@angular/material";
import { MatCardModule } from "@angular/material";
import { MatBottomSheetModule } from "@angular/material";

import { LOCALE_ID } from "@angular/core";
import de from "@angular/common/locales/de";
import { registerLocaleData } from "@angular/common";
registerLocaleData(de);

import { HttpClientModule } from "@angular/common/http";
import { DomSanitizer } from "@angular/platform-browser";
import { MatIconRegistry } from "@angular/material";
import { AddEventComponent } from "./add-event/add-event.component";
import { FormsModule } from "@angular/forms";
import { DeleteTimelineDialogComponent } from "./delete-timeline-dialog/delete-timeline-dialog.component";

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
  providers: [{ provide: LOCALE_ID, useValue: "de-de" }],
  bootstrap: [AppComponent],
  entryComponents: [AddEventComponent, DeleteTimelineDialogComponent]
})
export class AppModule {
  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    this.iconRegistry.addSvgIcon(
      "feed",
      this.sanitizer.bypassSecurityTrustResourceUrl("../assets/feed.svg")
    );
    this.iconRegistry.addSvgIcon(
      "bath",
      this.sanitizer.bypassSecurityTrustResourceUrl("../assets/bath.svg")
    );
    this.iconRegistry.addSvgIcon(
      "diaper",
      this.sanitizer.bypassSecurityTrustResourceUrl("../assets/diaper.svg")
    );
    this.iconRegistry.addSvgIcon(
      "sleep",
      this.sanitizer.bypassSecurityTrustResourceUrl("../assets/sleep.svg")
    );
  }
}
