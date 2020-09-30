class Rectangle {

  //Konstruktorfunktion
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  //Methode
  getArea() {
    return this.width * this.height;
  }

  toString() {
    return 'Breite: ' + this.width + ' Höhe: ' + this.height;
  }

  static createSquare(lenght) {
    return new Rectangle(length, length);
  }
}


class Cuboid extends Rectangle {

  //Konstruktorfunktion
  constructor(width, height, depth) {
    super(width, height);
    this.depth = depth;
  }

  //Methode
  getVolume() {
    return this.getArea() * this.depth;
  }

  toString() {
    return super.toString() + ' Tiefe: ' + this.depth;
  }

  static createCube(length) {
    return new Cuboid(length, length, length);
  }
}

const Point = class {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return 'X: ' + this.x + ' Y: ' + this.y;
  }

  static getDistance(p1, p2) {
    const distX = p1.x - p2.x;
    const distY = p1.y - p2.y;

    return Math.sqrt(distX * distX + distY * distY);
  }
}


console.log('-------- Rechteck ---------');
const rect = new Rectangle(20, 30);

console.log('Fläche: ' + rect.getArea()); //Ausgabe: Fläche: 600
console.log(rect.toString()); // Ausgabe: Breite 20 Höhe: 30
console.log(rect.width); // Ausgabe: 20


console.log('-------- Punkt ---------');

const p1 = new Point(20, 20);
const p2 = new Point(30, 40);

console.log('Distanz: ' + Point.getDistance(p1, p2)); //Ausgabe: Distanz: 22.360679774997898

console.log('-------- Quader ---------');
const cuboid = new Cuboid(10, 20, 20);
console.log(cuboid.toString()); // Ausgabe: Breite: 10 Höhe: 20 Tiefe: 20
console.log('Volumen: ' + cuboid.getVolume()); //Ausgabe: Volumen: 4000

console.log('-------- Würfel ---------');
const cube = Cuboid.createCube(10);

console.log(cube.toString()); // Ausgabe: Breite: 10 Höhe: 10 Tiefe: 10
console.log('Volumen: ' + cube.getVolume()); //Ausgabe: Volumen: 1000


console.log('-------- Rectangle Performance optimiert ---------');

class RectanglePerf {
  constructor(width, height) {
    this._width = width;
    this._height = height;
    this._calculateArea();
  }
  _calculateArea() {
    this._area = this._width * this._height;
  }
  set width(w) {
    this._width = w;
    this._calculateArea();
  }
  get width() {
    return this._width;
  }
  set height(h) {
    this._height = h;
    this._calculateArea();
  }
  get height() {
    return this._height;
  }
  get area() {
    return this._area;
  }
}

const rectPerf = new RectanglePerf(20, 30);
console.log('Fläche: ', rectPerf.area); // 600
rectPerf.height = 50;
console.log('Fläche: ', rectPerf.area); // 1000

rectPerf.area = 20; // TypeError: Cannot set property area of #<RectanglePerf> which has only a getter




class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    throw new TypeError(`Abstract class 'Animal' cannot make a sound.`);
  }

  greet() {
    return `Hi, my name is ${this.name} I'm a ${this.constructor.name} and I make ${this.makeSound()}`;
  }

}

class Cat extends Animal {

  makeSound() {
    return 'Meow';
  }

}
class Dog extends Animal {

  makeSound() {
    return 'Wuff';
  }

}

const cat = new Cat('Fritz');
const dog = new Dog('Scooby Doo');

printToHTML('h2', 'Vererbung');
printToHTML('div', cat.greet());
printToHTML('div', dog.greet());


/* Hilfsfunktion */
function printToHTML(type, content) {
  document.querySelector('#content').appendChild(document.createElement(type)).textContent = content
}
