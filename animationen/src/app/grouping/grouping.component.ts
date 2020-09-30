import { Component, OnInit, HostBinding } from '@angular/core';
import {zoomInOut, growAndShrink, growShrinkFade} from './grouping.animations';

@Component({
  animations: [
               zoomInOut('box1Animation'),
               growAndShrink('box2Animation'),
               growShrinkFade('box3Animation')],

  templateUrl: './grouping.component.html',
  styleUrls: ['./grouping.component.css']
})
export class GroupingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
