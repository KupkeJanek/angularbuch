import { Component, OnInit } from '@angular/core';
import {User} from '../shared/user';

@Component({
  selector: 'ch-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.css']
})
export class GenderComponent{

  registered = false;
  user = <User>{
    gender: "male",
    firstName: "John",
    lastName: "Doe"
  };

  registrationMessages = {
    "male": "Sehr geehrter Herr",
    "female": "Sehr geehrte Frau",
  };

  constructor() { }

  register(formValue: any) {
    console.log(formValue)
    Object.assign(this.user, formValue);

    this.registered = true;
  }
}
