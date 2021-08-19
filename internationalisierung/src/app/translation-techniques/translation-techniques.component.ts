import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ch-translation-techniques',
  templateUrl: './translation-techniques.component.html',
  styleUrls: ['./translation-techniques.component.css']
})
export class TranslationTechniquesComponent implements OnInit {
  greeting = 'Angular';
  user = 'John';

  greetingQuestion = '';
  personalGreetingQuestion = '';

  ngOnInit() {
    this.greetingQuestion = $localize `Wie geht es dir heute`;
    this.personalGreetingQuestion = $localize `Wie geht es dir heute ${this.user}`;
  }

}



