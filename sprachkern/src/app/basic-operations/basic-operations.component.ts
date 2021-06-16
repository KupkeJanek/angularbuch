import {Component} from '@angular/core';


@Component({
  selector: 'ch-basic-operations',
  templateUrl: 'basic-operations.component.html',
  styleUrls: ['basic-operations.component.css'],
})
export class BasicOperationsComponent {

  values = [1,2,3];

  isVisible = true;

  temperature: number;
  constructor() {
    this.temperature = 200;
  }

  calculateFontSize() {
    if (this.temperature > 100) {
      return 20;
    } else  {
      return 12;
    }
  }

  calculateColSpan() {
    return 2;
  }

}
