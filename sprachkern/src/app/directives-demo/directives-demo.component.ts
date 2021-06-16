import {Component} from '@angular/core';

@Component({
  selector: 'ch-directives-demo',
  templateUrl: 'directives-demo.component.html',
  styleUrls: ['directives-demo.component.css']
})
export class DirectivesDemoComponent {
  borderWidth = 1;
  sliderValue: number = 50;

  constructor() {
  }

  submit(email: string) {
    console.log('Die E-Mail Adresse lautet', email);
  }

}
