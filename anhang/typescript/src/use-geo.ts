import * as lo from 'lodash';
import {Rectangle} from './geo'

let rectangles = [new Rectangle(25,50),
                  new Rectangle(30,50), 
                  new Rectangle(50,50)];

let allBiggerThan1000 = lo.every(rectangles, (elem: any) => {
  return elem.getArea() > 1000;
});

console.log('all bigger then 1000?', allBiggerThan1000); // true

let rectangle = new Rectangle(20,50);
console.log(rectangle.toString());
