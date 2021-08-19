import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: string = '';
  @Output() completed = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  complete() {
    this.completed.emit(this.todo);
  }

}
