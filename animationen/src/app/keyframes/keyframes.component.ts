import {Component, OnInit} from '@angular/core';
import {animate, keyframes, style, transition, trigger} from '@angular/animations';

import {Todo} from '../shared/todo';

@Component({

  animations: [
    trigger('todoAnimation', [
      transition(':enter', [
        animate('400ms', keyframes([
          style({opacity: 0, transform: 'translateY(-100%)', offset: 0}),
          style({opacity: 0.5, transform: 'translateY(15px)', offset: 0.3}),
          style({opacity: 1, transform: 'translateY(0)', offset: 1.0})
        ]))
      ]),
      transition(':leave', [
        style({'transform-origin': '100% 100%'}),
        animate('400ms', keyframes([
          style({opacity: 1, transform: 'translateX(-15px)', offset: 0.3}),
          style({opacity: 0, transform: 'translateX(100%)', offset: 1.0})
        ]))
      ])
    ])],
  templateUrl: './keyframes.component.html',
  styleUrls: ['./keyframes.component.css']
})
export class KeyframesComponent implements OnInit {

  todos: Todo[] = [];

  constructor() {

  }

  addTodo(text: string) {
    this.todos = [...this.todos, {text: text, completed: false}];
  }

  completeTodo(todo: Todo) {
    this.todos = this.todos.filter(todo_ => todo_ !== todo);
  }

  ngOnInit() {
  }

}
