
import {Rectangle as Rect, createSquare, PI} from './geo.js'
import * as Geo from './geo.js'

import Point, {createPoint} from './point.js'
const point = createPoint(5,5);

const rect = new Rect(20, 50);

const square = createSquare(30);

console.log('Rect: ' + rect.toString());
console.log('Square: ' + square.toString());
console.log('PI: ' + PI);


const rect2 = new Geo.Rectangle(200, 500);
const square2 = Geo.createSquare(300);

console.log('Rect: ' + rect2.toString());
console.log('Square: ' + square2.toString());
console.log('PI: ' + Geo.PI);

console.log('------Default exports: Point ------');

const point1 = new Point(3,5);
const point2 = createPoint(5,5);

console.log(point1.toString());
console.log(point2.toString());
