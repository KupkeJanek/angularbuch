import { Component } from '@angular/core';
import {executeInjection} from '../../low-level-injection/low-level-injection';

@Component({
  selector: 'ch-di-examples',
  templateUrl: 'di-examples.component.html',
  styleUrls: ['di-examples.component.css'],
})
export class DiExamplesComponent {

  startLowLevelInjection() {
    executeInjection();
  }

}
