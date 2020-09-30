namespace ClassDescription {
  class Rectangle {
    constructor(private width:number,
                private height:number) {
    }
    getArea():number {
      return this.width * this.height;
    }
    static createSquare(width:number):Rectangle {
      return new Rectangle(width, width);
    }
    toString():string {
      return `Breite: ${this.width}  Höhe: ${this.height}`;
    }
  }

  let rectangle = new Rectangle(90, 20);
  console.log(rectangle.toString());


  class RectanglePerf {

    private _area: number;

    constructor(private _width: number, private _height: number) {
      this.calculateArea();
    }
    protected calculateArea() {
      this._area = this._width * this._height;
    }
    set width(w) {
      this._width = w;
      this.calculateArea();
    }
    get width() {
      return this._width;
    }
    set height(h) {
      this._height = h;
      this.calculateArea();
    }
    get height() {
      return this._height;
    }
    get area() {
      return this._area;
    }
  }

  console.log("------------ Sichtbarkeitsmodifikatoren ------------");

  let rect = new RectanglePerf(20, 30);
  rect.height = 100; // ok
  console.log(rect.area); // 2000

  //rect._height = 100; // Property '_height' is private and only
                      // accessible within class 'RectanglePerf'.

  //rect.calculateArea() = 100; // Property 'calculateArea' is protected
                              // and only accessible within class
                              //  'RectanglePerf' and its subclasses.


  class CuboidPerf extends RectanglePerf {
    private _volume: number;
    constructor(_width: number, _height: number, private _depth: number) {
      super(_width, _height);
      this.calculateVolume();
    }
    set depth(d: number) {
      this._depth = d;
      this.calculateVolume();
    }
    get depth() {
      return this._depth;
    }
    protected calculateVolume() {
      super.calculateArea();
      this._volume = this.area * this._depth;
    }

    get volume() {
      return this._volume;
    }
  }

  let cuboid = new CuboidPerf(10, 10, 10);
  console.log(cuboid.volume); // 1000
  cuboid.depth = 20;
  console.log(cuboid.volume); // 2000

  abstract class Animal {
    constructor(public legCount: number) {
    }

    abstract makeSound(): string;

    sayHello() {
      console.log(`${this.makeSound()}! I have ${this.legCount} legs`);
    }
  }

  class Dog extends Animal{
    constructor() {
      super(4);
    }
    makeSound() {
      return "Wuff Wuff";
    }
  }

  class Duck extends Animal{
    constructor() {
      super(2);
    }
    makeSound() {
      return "Quack";
    }
  }

  let dog = new Dog();
  dog.sayHello(); // Wuff Wuff! I have 4 legs

  let duck = new Duck();
  duck.sayHello(); // Quack! I have 2 legs

  let animals = [dog, duck];
  for(let animal of animals) {
    animal.sayHello();
  }






}



