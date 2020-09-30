namespace InterfaceChapter {

  interface RectangleConfig {
    width: number;
    height?: number;
    color?: string;
  }

  interface Colored {
    color: string;
  }

  class Rectangle implements Colored {
    constructor(public width: number,
                public height: number,
                public color: string) {
    }

    //Methode
    getArea(): number {
      return this.width * this.height;
    }

    static createSquare(width: number): Rectangle {
      return new Rectangle(width, width, 'black');
    }

    static create(config: RectangleConfig): Rectangle {
      let height = config.height || config.width;
      let color = config.color || 'black';
      return new Rectangle(config.width, height, color);
    }

    static create2(width: number,
                   height: number,
                   color: string): Rectangle {
      return new Rectangle(width, height, color);
    }

    static create3(config: any): Rectangle {
      let height = config.height || config.width;
      let color = config.color || 'black';
      return new Rectangle(config.width, height, color);
    }

    toString(): string {
      return `Breite: ${this.width} 
              Höhe: ${this.height} 
              Farbe: ${this.color}`;
    }
  }

  Rectangle.create3({hoehe: 10, breite: 20, farbe: 'blau'});

  class Point {
    constructor(public x: number,
                public y: number,
                public color: string) {
    }
  }

  let rect1 = Rectangle.create({width: 20});
  let rect2 = Rectangle.create({width: 20, height: 50});
  let rect3 = Rectangle.create({width: 20, color: 'blue'});
  //let rect4 = Rectangle.create({height: 50}); // Argument of type '{ height: number; }' is not assignable to parameter of type 'RectangleConfig'. Property 'width' is missing in type '{ height: number; }'.
  // let rect5 = Rectangle.create({width: 20, colour: 'blue'}); Argument of type '{ width: number; colour: string; }' is not assignable to parameter of type 'RectangleConfig'.  Object literal may only specify known properties, and 'colour' does not exist in type 'RectangleConfig'.

  function setColor(color: string, coloredThings: Array<Colored>) {
    for (let coloredThing of coloredThings) {
      //coloredThing.colour = color; // Property 'colour' does not exist on type 'Colored'.
      coloredThing.color = color
    }
  }

  let somethingColored = {color: 'green'}; // Duck - Typing
  let point = new Point(10, 10, 'blue');

  let things = [rect1, rect2, rect3, point, somethingColored];
  setColor('yellow', things);

  for (let thing of things) {
    console.log(thing);
  }
}


