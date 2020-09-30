namespace Advanced {
// --------------------------- Union Types -----------------------------------
  const TODOS = [
    {id: 1, text: "Aufräumen"},
    {id: 2, text: "Einkaufen gehen"}
  ];

  class TodoService {
    todos = [{id: 1, text: "Aufräumen"},
      {id: 2, text: "Einkaufen gehen"}];

    getTodo(id:string | number) {
      return this.todos.filter(todo => {
        return todo.id == id;
      })[0];
    }
  }


  let todoService = new TodoService();
  let todo1 = todoService.getTodo(1);
  let todo2 = todoService.getTodo("2");

  console.log(todo1.text); // Aufräumen
  console.log(todo2.text); // Einkaufen gehen

// --------------------------- Typ Aliase -----------------------------------

  type Id = number;

  type StringOrNumber = string | number;

  class TodoService2 {
    getTodo(id:StringOrNumber) {
      return TODOS.filter(task => {
        return task.id == id;
      })[0];
    }

    printTodo(id:Id): void {
      console.log(this.getTodo(id))
    }
  }

  let todoService2 = new TodoService2();
  let task2_1 = todoService2.getTodo(1);

  todoService2.printTodo(1); //{"id":1,"text":"Aufräumen"}

// --------------------------- String Literaltypen -----------------------------------

  type Direction = 'up' | 'down' | 'left' | 'right';

  class Player {
    xPos:number = 0;
    yPos:number = 0;

    move(direction:Direction) {
      switch (direction) {
        case 'left':
          this.xPos -= 1;
          break;
        case 'right':
          this.xPos += 1;
          break;
        case 'up':
          this.yPos += 1;
          break;
        case 'down':
          this.yPos += 1;
          break;
      }
    }

    printLocation(): void {
      console.log(`X: ${this.xPos} / Y: ${this.yPos}`);
    }
  }

  let player = new Player();
  player.move('right');
  player.printLocation(); // X: 1 / Y: 0
//game.move('top'); // Argument of type '"top"' is not assignable to parameter of type '"up" | "down" | "left" | "right"'

// --------------------------- Type Guards -----------------------------------

  // -------------- typeof --------------


  let list = [1, 2, 4, 5, 7];

  function getElementByIndex(index:string | number) {
    if (typeof index === 'number') {
      // Ab hier wird index als number behandelt
      return list[index];
    } else {
      // Ab hier wird index als string behandelt
      return list[parseInt(index)];
    }
  }

  // -------------- instanceof --------------

  interface Colored {
    color:string;
  }


  class Rectangle implements Colored {
    constructor(public width: number,
                public height: number,
                public color: string){
    }
    getArea(): number {
      return this.width * this.height;
    }
  }
  class Circle implements Colored {
    constructor(public radius: number,
                public color: string){
    }
    getDiameter(): number {
      return this.radius * 2;
    }
  }

  function printColoredObject(obj: Colored) {
    if (obj instanceof  Rectangle) {
      console.log("Fläche: " + obj.getArea());
    }
    if (obj instanceof Circle) {
      console.log("Durchmesser: " + obj.getDiameter());
    }
  }

  function printRectOrCirclie(obj: Rectangle | Circle) {
    if (obj instanceof  Rectangle) {
      console.log("Fläche: " + obj.getArea());
    } else {
      console.log("Durchmesser: " + obj.getDiameter());
    }
  }

  // -------------- own type guards --------------

  interface Dog {
    bark() : string;
    eat() : void;
  }
  interface Cat {
    meow() : string;
    eat() : void;
  }

  function isDog(pet: Dog | Cat) : pet is Dog {
    return (<Dog>pet).bark !== undefined;
  }

  function everyMorning(pet: Dog | Cat) {
    if (isDog(pet)) {
      pet.bark();
    }
    else {
      pet.meow();
    }
    pet.eat(); // OK
  }

  function everyMorning2(pet: Dog | Cat) {
    if ((<Dog>pet).bark) {
      (<Dog>pet).bark();
    }
    else {
      (<Cat>pet).meow();
    }
    pet.eat(); // OK
  }

  /*
  function everyMorning(pet: Dog | Cat) {
    if (pet.bark) { //Property 'bark' does not exist on type 'Dog | Cat'.
      pet.bark();  //Property 'bark' does not exist on type 'Dog | Cat'.
    }
    else {  
      pet.meow(); //Property 'meow' does not exist on type 'Dog | Cat'.
    }
    pet.eat(); // OK
  }
*/

}