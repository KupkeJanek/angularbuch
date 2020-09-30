console.log('--------- Hello Generator --------');
function *helloGenerator() {
  console.log('Hello');
  yield
  console.log('Generator');
}
const gen = helloGenerator();
console.log(gen.next());
console.log(gen.next());

console.log('------ Generator mit Werten-----');
function *generatorWithValues() {
  yield 'Hello';
  yield 'Generator';
}

const gen2 = generatorWithValues();
console.log(gen2.next());
console.log(gen2.next());
console.log(gen2.next());

for(const value of generatorWithValues()) {
  console.log(value);
}

function *squareGenerator() {
  let value = 1;
  while(true) {
    yield Math.pow(value++, 2);
  }
}

for (const n of squareGenerator()) {
  // truncate the sequence at 1000
  if (n > 100)
    break;
  console.log(n);
}

console.log('------ Generator mit Parameter-----');


function *squareGeneratorWithInputData() {
  let value = 1;
  while(true) {
    const jumpTo = yield Math.pow(value++, 2);
    if(jumpTo) {
      value = jumpTo;
    }
  }
}


const gen3 = squareGeneratorWithInputData();
console.log(gen3.next()); //{'value':1,'done':false}
console.log(gen3.next()); //{'value':4,'done':false}
console.log(gen3.next(5));//{'value':25,'done':false}
console.log(gen3.next()); //{'value':36,'done':false}

