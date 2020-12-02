import {Component, OnInit} from '@angular/core';
import {animate, group, query, style, transition, trigger} from '@angular/animations';

@Component({
  templateUrl: './querying.component.html',
  styleUrls: ['./querying.component.css'],
  animations: [
    trigger('panelAnimation', [
      transition(':enter', [
        query('.panel-heading', style({transform: 'translateX(-100%)'})),
        query('.panel-body', style({opacity: 0})),
        query('.panel-footer',
          style({transform: 'translateY(100%)'}),
          {optional: true}
        ),
        group([
          query('.panel-heading', animate(400, style({transform: 'translateX(0%)'}))),
          query('.panel-body', animate(400, style({opacity: 1}))),
          query('.panel-footer', animate(400, style({transform: 'translateY(0)'}))),
        ])
      ])
    ])
  ]
})
export class QueryingComponent implements OnInit {

  showDialog = false;

  constructor() {
  }

  ngOnInit() {
  }


}
