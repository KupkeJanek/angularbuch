import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {UserService} from './services/user-service/user.service';
import {AppComponent} from './app.component';
import {MainViewComponent} from './components/main-view/main-view.component';
import {VideoLibraryComponent} from './components/video-library/video-library.component';
import {MusicLibraryComponent} from './components/music-library/music-library.component';
import {TABS_DIRECTIVES} from './components/tabs/tabs.component';
import {DiExamplesComponent} from './components/di-examples/di-examples.component';
import {MedipediaComponent} from './components/medipedia/medipedia.component';
import {SearchBarComponent} from './components/search-bar/search-bar.component';
import {UserBadgeComponent} from './components/user-badge/user-badge.component';
import {BorderDirective} from './directives/border/border.directive';
import {AlertDirective} from './directives/alert/alert.directive';
import {DirectoryComponent} from './components/directory/directory.component';
import { LoginComponent } from './login/login.component';
import {LoginService} from './login.service';
import {OAuthLoginService} from './oauth-login.service';
import {RANDOM_VALUE} from './low-level-injection/app-tokens-ts';
import {HttpClientModule} from '@angular/common/http';

export function generateRandomValue() {
    return Math.floor(Math.random() * 101);
}

export function getLoginService(useOAuth: boolean) {
    if (useOAuth) {
        return new OAuthLoginService();
    } else {
        return new LoginService();
    }
}


@NgModule({
  imports: [BrowserModule, HttpClientModule],
  providers: [
     // LoginService,
      {provide: 'greeting', useValue: 'Howdy'},
     // {provide: 'random-value', useFactory: generateRandomValue},
      {provide: RANDOM_VALUE, useFactory: generateRandomValue},
      {provide: 'ENABLE_OAUTH', useValue: true},
      {provide: LoginService, useFactory: getLoginService,
          deps: ['ENABLE_OAUTH'],
      },
      {provide: 'currentLoginService', useExisting: LoginService },
      // UserService // -> hier wird nun ein Injectable-Provider verwendet (siehe @Injectable-Decorator der UserService Klasse
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    DiExamplesComponent,
    SearchBarComponent,
    MedipediaComponent,
    MusicLibraryComponent,
    VideoLibraryComponent,
    MainViewComponent,
    UserBadgeComponent,
    DirectoryComponent,
    AlertDirective,
    BorderDirective,
    TABS_DIRECTIVES,
    LoginComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}

