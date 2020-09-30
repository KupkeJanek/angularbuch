namespace Generics {
    
  let numbers: Array<number> = [1, 2, 3];

  type Id = string | number;
  interface Identifiable {
    id: Id;
  }

  class Store<T extends Identifiable> {
    private items:Array< T > = [];

    constructor(private storageKey: string) {
      let itemsAsString = localStorage.getItem(storageKey);
      if (itemsAsString) {
        this.items = JSON.parse(itemsAsString);
      }
    }

    saveInStorage() {
      localStorage.setItem(this.storageKey, JSON.stringify(this.items));
    }

    getItems():Array<T> {
      return this.items;
    }

    addItem(item:T) {
      this.items.push(item);
      this.saveInStorage();
    }
    deleteItem(id: Id) : void {
      this.items = this.items.filter((item) => {
        return item.id != id;
      });
      this.saveInStorage()
    }
  }

  class Todo {
    constructor(public id: number,
                public text: string){
    }
  }

  let todoStore = new Store<Todo>("TODOS");
  todoStore.addItem(new Todo(1, "Aufräumen"));
  todoStore.addItem(new Todo(2, "Einkaufen gehen"));

  console.log(todoStore.getItems());

  todoStore.deleteItem(1);

  console.log(todoStore.getItems());


  class Person {
    constructor(public id: string,
                public name: string){
    }
  }


  let personStore = new Store<Person>("PERSONS");

  personStore.addItem(new Person("1", "John"));
  personStore.addItem(new Person("2", "Mary"));

  personStore.deleteItem("2");


}