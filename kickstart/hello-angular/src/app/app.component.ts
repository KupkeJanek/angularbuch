import {Component} from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `<span>Hallo {{name}}!</span>`
})
export class AppComponent {
  name: string;
  constructor() {
    this.name = 'Angular';
  }
}

