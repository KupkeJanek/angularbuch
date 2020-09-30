'use strict';
/*
const user = {
  firstName: 'John',
  lastName: 'Doe'
};

console.log(user['firstName']); //John
*/

const firstName = Symbol('firstName');
const lastName = Symbol('lastName');

const user = {};
user[firstName] = 'John';
user[lastName] = 'Doe';

console.log(user[firstName]); //John
console.log(user); // {}
console.log(user.firstName); // undefined
console.log(user['firstName']);// undefined

const symbol1 = Symbol('symbol');
const symbol2 = Symbol('symbol');
console.log(symbol1 === symbol2); // false

