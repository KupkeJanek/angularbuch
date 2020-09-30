console.log(' -------------Konstanten -----------------');

const PI = 3.14159265359;
//PI = 42 // je nach Laufzeitumgebung Fehler oder ohne Auswirkung
console.log(PI); // Ausgabe  3.14159265359;

const LOCATION = 'Ausserhalb';
if (true) {
  const LOCATION = 'Innerhalb';
  console.log(LOCATION); // Ausgabe: 'Innerhalb';
}
console.log(LOCATION); //Ausgabe: 'Ausserhalb'

console.log(' ------------- asynchrone Funktion ohne Block Scope -----------------');

console.log(i); // Ausgabe: undefined
console.log(square); //Ausgabe: undefined
//console.log(foo); //ReferenceError: foo is not defined
for (var i = 0; i < 10; i++) {
  var square = i * i;
  setTimeout(function () {
    console.log(square);  //  Ausgabe:  81, 81, 81
  }, i * 1000);
}
console.log(i); //  Ausgabe: 10
console.log(square); //  Ausgabe: 81


setTimeout(function () {
    console.log(' ------------- asynchrone Funktion mit Block Scope -----------------');

    for (let j = 0; j < 10; j++) {
      const square = j * j;
      setTimeout(function () {
        console.log(square);
      }, j * 1000);
    }
  }
  , 11000);
