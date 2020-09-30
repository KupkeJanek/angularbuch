import {Component, EventEmitter, LOCALE_ID, Inject} from '@angular/core';
import {timer} from 'rxjs';
import {DecimalPipe} from '@angular/common';

@Component({
  selector: 'ch-pipes-demo',
  templateUrl: 'pipes-demo.component.html',
})
export class PipesDemoComponent {

  deciPipe: DecimalPipe;

  currentDate = new Date();

  dateString = '2018-07-05T19:05:03+02:00';

  time =  {
    hours: 12,
    minutes: 4,
    seconds: 8
  };

  header = 'Ich bin eine Überschrift';
  email = 'John@Doe.com';

  counter = timer(2000, 1000);

  promise = new Promise(
     (resolve)  => {
       setTimeout(() => {
         resolve('Der asynchrone Wert wurde geladen');
       }, 5000);
    });

  dateEmitter = new EventEmitter();

  date = new Date();
  pi = Math.PI;
  completed = 0.79;

  currentUser = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'John@Doe.com'
  };


  friends = ['Bob', 'Jane', 'John', 'Mary'];

  numbers = [];

  constructor(@Inject(LOCALE_ID) localeId) {

    this.deciPipe  = new DecimalPipe(localeId);

    for (let i = 1; i <= 10; i++) {
      this.numbers.push(i);
    }

    this.counter.subscribe((value) => {
    });
    console.log(this.getTime());

    console.log(this.deciPipe.transform(33.3));
  }

  dontSort(a, b) {
    return 0;
  }

  getTime() {
    const hours = this.deciPipe.transform(this.time.hours, '2.0-0', 'de');
    const minutes = this.deciPipe.transform(this.time.minutes, '2.0-0', 'de');
    const seconds = this.deciPipe.transform(this.time.seconds, '2.0-0', 'de');
    return `${hours}:${minutes}:${seconds}`;
  }

}

/*
 this.loadAsyncVal(function (success) {
 console.log(success);
 },
 function (error) {
 console.log(error);
 });


 loadAsyncVal(sucessCallback, errorCallback) {
 var success = true;
 setTimeout(() => {
 if (success) {
 sucessCallback("Der asynchrone Wert wurde geladen");
 } else {
 errorCallback("Fehler beim Laden des Wertes")
 }
 }, 5000);
 }

 loadAsyncValue() {
 return new Promise(
 (resolve, reject)  => {
 var success = true;
 setTimeout(() => {
 if (success) {
 resolve("Der asynchrone Wert wurde geladen");
 } else {
 reject("Fehler beim Laden des Wertes")
 }
 }, 5000);
 }
 );
 }

 */
