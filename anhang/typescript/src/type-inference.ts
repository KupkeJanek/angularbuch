namespace TypeInferenceChapter {

  let theAnswer = 42;
  // theAnswer = "Yes"; // Type 'string' is not assignable to type 'number'.

  let numbers = [42, 4711];
//  numbers.push("foo");

  let list = [1, "yes"];
  list.push("no"); // ok
  //list.push(true); // Argument of type 'boolean' is not assignable to parameter of type 'number | string'.
  

  interface Colored {
    color: string;
  }
  class Point implements Colored {
    constructor(public x:number,
                public y:number,
                public color:string) {
    }
  }
  class Square implements Colored {
    constructor(public width:number,
                public color:string) {
    }
  }
  let square = new Square(10, "blue");
  let point = new Point(10, 10, "white");
  let objects: Colored[] = [square, point];

//  var arr = [square, point];
  class Circle implements Colored {
    constructor(public radius:number,
                public color:string) {
    }
  }
  let circle = new Circle(50, "green");
  objects.push(circle); 

  objects.push({color: "blue"});

  console.log("Colored Objects:" , objects);
  // var arr: Colored[] = [square, point];


}