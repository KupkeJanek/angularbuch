import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ch-pluralization',
  templateUrl: './pluralization.component.html',
  styleUrls: ['./pluralization.component.css']
})
export class PluralizationComponent {

  todos: string[] = [
    "Aufräumen",
    "Einkaufen",
    "Mama anrufen",
    "Mit dem Hund Gassi gehen",
    "Joggen"
  ];

  todoTextsMapping = {
    "=0" : $localize `Alle Aufgaben erledigt`,
    "=1" : $localize `Eine Aufgabe`,
    "other" : $localize `# Aufgaben`
  };

  completeTodo(todo: string) {
    this.todos = this.todos.filter(todo_ =>  todo_ !== todo);
  }

}
