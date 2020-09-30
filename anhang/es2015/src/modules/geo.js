import Point from './point.js'

export class Rectangle {

  //Membervariablen für Breite und Höhe:
  width;
  height;

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
}

export class Cuboid extends Rectangle {

  //Membervariablen für die Tiefe:
  depth;

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

}

export function createSquare(length) {
  return new Rectangle(length, length);
}

export const PI = 3.14159265359;

export function createCube(length) {
  return new Cuboid(length, length, length);
}