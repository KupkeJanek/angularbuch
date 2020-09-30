import {Component, Inject, OnInit} from '@angular/core';
import {LoginService} from '../login.service';
import {RANDOM_VALUE} from '../low-level-injection/app-tokens-ts';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private loginService: LoginService, @Inject(RANDOM_VALUE) randomValue) {
      console.log(`Der zufällige Wert lautet ${randomValue}`);
  }
  submit() {
    this.loginService.login({username: 'chris', password: 's3cret'})
  }
}
