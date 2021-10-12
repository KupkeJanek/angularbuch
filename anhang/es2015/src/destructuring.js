'use strict';

// Destructuring Variables

const currentUser = {
  firstName: 'John',
  lastName: 'Doe',
  address: {
    city: 'New York',
    postalCode: '10001'
  }
};

const {firstName, address: {city: usersCity}} = currentUser;
console.log('Hello ' + firstName + '! How is it going in ' + usersCity); // Hello John! How is it going in New York

const {firstName: first, lastName: last} = currentUser;

console.log('Hey ' + first + ' ' + last); // Hello John Doe

console.log('Hello ' + first + '! How is it going in ' + usersCity); // Hello John Doe

//Destructuring function calls:
function max(arr) {
  let result = arr[0];
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > result) {
      result = arr[i];
      index = i;
    }
  }
  return {result: result, index: index};
}


const arr = [-1, 6, 2, 8, 5, 3];
const {result, index} = max(arr);
console.log('Result: ' + result); // 8
console.log('Index: ' + index); // 3

const {index2}  = max(arr);
console.log('Index: ' + index2); // 3


const resultObj = max(arr);
console.log('Max-ResultObjekt ', resultObj);

//Destructuring Arrays
const bestPlayers = ['John', 'Jane', 'Bob', 'Mary', 'Lisa'];
let [winner, second, third] = bestPlayers;
console.log('1st: ', winner, '2nd: ', second, '3rd: ', third);// 1st: John 2nd: Jane 3rd: Bob

let [winner1, , third1, , fifth1] = bestPlayers;
console.log('1st ', winner1, '3rd', third1, '5th: ', fifth1); //1st John 3rd Bob 5th: Lisa


let [winner2, ...theRest2] = bestPlayers;
console.log('1st ', winner2, 'The rest:', theRest2);// 1st John The rest: ['Jane','Bob','Mary','Lisa']


//Parameter Destructuring

//Destructuring in Parameter Listen
drawRectangleTraditional(30, 40, 400, 600);


//Destructuring in Parameter Listen
function drawRectangleTraditional(x, y, height, width) {
  console.log('X ', x);
  console.log('Y ', x);
  console.log('Height ', height);
  console.log('Width ', width);
}

function drawRectangleWithConfig(config) {
  console.log('X ', config.x);
  console.log('Y ', config.y);
  console.log('Height ', config.height);
  console.log('Width ', config.width);
}

const rectangle = {x: 30, y: 40, height: 400, width: 600};
drawRectangleWithConfig(rectangle);

drawRectangle({x: 30, y: 40, height: 400, width: 600});

function drawRectangle({x, y, height, width}) {
  console.log('X ', x);
  console.log('Y ', x);
  console.log('Height ', height);
  console.log('Width ', width);
}


function drawRectangleObj(rect) {
  console.log('X ', rect.x);
  console.log('Y ', rect.y);
  console.log('Height ', rect.height);
  console.log('Width ', rect.width);
}


function printToHTML(type, content) {
  document.querySelector('#content').appendChild(document.createElement(type)).textContent = content;
}
