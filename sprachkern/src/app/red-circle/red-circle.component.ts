import {Component} from '@angular/core';

@Component({
  selector: 'ch-red-circle',
  template: '<div></div>',
  styles: [`
     div {
       border-radius: 50%;
       width: 40px;
       height: 40px;
       background-color: red;
     }
  `]
})
export class RedCircleComponent {
}
