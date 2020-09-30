// Array.from

function removeDuplicates(array) {
  const uniqueSet = new Set(array);
  return Array.from(uniqueSet);
}

const unique = removeDuplicates([1,3,2,1,3]);
console.log(unique); // [1,3,2]

function *sequence(max) {
  let value = 1;
  while(value <= max) {
    yield value++;
  }
}
const squares = Array.from(sequence(5), elem => elem * elem);
console.log(squares); // [1, 4, 9, 16, 25]

// keys, values, entries

['John', 'Jane'].values(); // iterator: 'John', 'Jane'
['John', 'Jane'].keys(); // iterator: 0, 1
['John', 'Jane'].entries(); // iterator: [0, 'John'], [1,'Jane']

const players = ['John', 'Jane', 'Bob'];
for(const [index, player] of players.entries()) {
  console.log (`${index}: ${player}`); //0: John ...
}

// find und findIndex

const values = [1, 3, 7, 6, 2];
console.log(values.find(elem => elem > 5)); // 7
console.log(values.findIndex(elem => elem > 5)); // 2

console.log(values.find(elem => elem > 10)); // undefined
console.log(values.findIndex(elem => elem > 10)); // -1

// fill

console.log([1, 2, 3, 4].fill(5)); //5, 5, 5, 5
console.log([1, 2, 3, 4].fill(5, 1)); //1, 5, 5, 5
console.log([1, 2, 3, 4].fill(5, 1, 3)); //1, 5, 5, 4

const initialScores = Array(5).fill(0); //0, 0, 0, 0, 0
console.log(initialScores);
