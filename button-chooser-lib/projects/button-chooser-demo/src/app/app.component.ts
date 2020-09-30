import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  choices = ['Mono-Repo', 'NPM Library'];

  answer: string;
  answerFromWebComponent: string;

  constructor() { }

  register(user: any) {
    console.log('Registering User', user);
  }

  changed(event: any) {
    console.log(event);
  }

  valueChanged(answer: string) {
    this.answerFromWebComponent = answer;
  }

}
