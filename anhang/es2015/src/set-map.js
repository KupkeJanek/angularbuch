let mySet = new Set([1, 1, 2, 6, 'foo', {}]);
mySet.add(2);
mySet.add(5);

mySet.forEach((elem) => {
  console.log(elem); // 1, 2, 6, 'foo', {}, 5
});

for(const value of mySet) {
  console.log(value); // 1, 2, 6, 'foo', {}, 5
}


console.log(mySet.has(2)); // true
console.log(mySet.delete(2)); // true (da Element vorher enthalten war)
console.log(mySet.delete(2)); // false (Element nicht gefunden)
console.log(mySet.has(2)); // false

console.log(mySet.size); // 5
mySet.clear();
console.log(mySet.size); // 0

mySet = new Set([1, 1, 2, 6]);

const array = [...mySet];
console.log(array); // [1, 2, 6]
console.log(Array.from(mySet)); // [1, 2, 6]


const string = 'hello';
const obj = {};

function someFunction() {
  return 42;
}

console.log('----- Map -----')


const map = new Map();
map.set(1, 'value for 1');
map.set(string, 'value for string');
map.set(obj, 'value for obj');
map.set(someFunction, 'value for someFunction');

for (const entry of map) {
  const logEntry = `Key: ${entry[0]}, Value: ${entry[1]}`;
  console.log(logEntry); // Key: 1, Value: value for 1 ...
}

map.forEach((value, key) => {
  console.log(`Key: ${key}, Value: ${value}`);
});

console.log(map.get(1)); //'value for 1'
console.log(map.get(someFunction)); //'value for someFunction'

console.log(map.has('hello')); // true
console.log(map.delete('hello')); // true
console.log(map.keys()); // iterator: 1, {}, someFunction
console.log(map.values()); //iterator: 'value for 1', 'value for obj', ...
console.log([...map.entries()]); //iterator: [1,'value for 1'],[{},'value for obj']...
console.log(map.size); // 3
map.clear();
console.log(map.size); // 0

const sourceArray = [[1, 'foo'], [2, 'bar'], [3, 'baz']];
const myMap = new Map(sourceArray);
console.log(myMap.get(3)); // baz

const oldSchoolMap = {
  'key1': 'value1',
  'key2': 'value2'
};
console.log(oldSchoolMap['key1']); //'value1'

console.log(oldSchoolMap['toString']); // function toString() { [native code] }
