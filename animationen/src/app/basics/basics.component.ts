import {ChangeDetectorRef, Component} from '@angular/core';

@Component({
  animations: [],
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent {
  showTabs: boolean;


  created = Math.random();

  constructor(private changeDetector: ChangeDetectorRef) {
    console.log('constructor');
    console.log(this.created);
  }

}
