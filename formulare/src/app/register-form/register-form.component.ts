import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pjm-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  genderChoices = ['Herr', 'Frau'];

  user: any = {
  };

  constructor() { }

  ngOnInit() {
  }

  register(user: any) {
    console.log('Registering User', user);
  }

}
