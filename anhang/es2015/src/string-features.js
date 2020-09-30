const sentence = 'Lorem ipsum dolor sit amet';

console.log('--------- includes -----------');

console.log(sentence.includes('ipsum')); // true
console.log(sentence.includes('ipsum', 7)); // false


console.log('--------- startsWith / endsWith -----------');

console.log(sentence.startsWith('Lorem')); // true
console.log(sentence.endsWith('amet')); // true

console.log(sentence.startsWith('ipsum', 6)); //true
console.log(sentence.endsWith('dolor', 17)); //true

console.log('--------- padStart / padEnd -----------');

const string = 'test';

console.log(string.padStart(8)); // '    test';
console.log(string.padEnd(8)); // 'test    ';
console.log(string.padEnd(8, 'a')); // 'testaaaa';
console.log(string.padEnd(8, 'abc')); // 'testabca';

const hours = '7';
const minutes = '20';

console.log(`${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}`); // 07:20


console.log('--------- raw String -----------');

console.log(String.raw`Hello \n raw`); //Hello \n raw

const name = 'John';
console.log(String.raw`Hello \n ${name}!`); // Hello \n John!

console.log('--------- repeat -----------');

console.log('Hello '.repeat(3)); //Hello Hello Hello