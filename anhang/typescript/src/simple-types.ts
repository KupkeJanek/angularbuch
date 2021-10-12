
namespace Simpconstypes {

  //Boolean:

  const alert = 'temp_too_high';

  let enabled:boolean = true;
  if (alert) {
    enabled = false;
    //enabled = "off"; //Type 'string' is not assignable to type 'boolean'
  }

  // --------------------------- string -----------------------------------


  const userName: string = "John Doe";
  function greeter(name: string): string {
    return `Hello ${name} `; //Hello John Doe
  }
  console.log(greeter(userName));


  // --------------------------- number -----------------------------------

  const decimal: number = 42;
  const float: number = 42.00;
  const hex: number = 0x2A;
  const binary: number = 0b00101010;
  const octal: number = 0o52;

  console.log("Die Antwort lautet " + hex); // Die Antwort lautet 42

  //Enums -> lesbarer Name für numerischen Wert
  // --------------------------- enum -----------------------------------

  enum Size {Small, Medium, Large}
  const size = Size.Small;
  console.log(size); // Ausgabe: 1

  function orderCoffee(size: Size) {
    switch(size) {
      case Size.Small:
        console.log("Kleiner Kaffee");
        break;
      case Size.Medium:
        console.log("Mittlerer Kaffee");
        break;
      case Size.Large:
        console.log("Großer Kaffee");
        break;
    }
  }

  orderCoffee(Size.Large); // Großer Kaffee;

  enum SizeStarbucks {Tall = 355, Grande = 473, Venti = 592}
  const grande = SizeStarbucks.Grande;
  console.log(`Inhalt: ${grande}ml`); //Inhalt: 473ml



  const sizeName: string = SizeStarbucks[473];
  console.log(`Ihre Bestellung: ${sizeName}`); //Ihre Bestellung: Grande


  const venti = SizeStarbucks.Venti;
  function printSize(size: SizeStarbucks) {
    console.log(`Name: ${SizeStarbucks[size]}, Inhalt: ${size}ml`);
  }
  printSize(venti); //Name: Venti, Inhalt: 592ml

  console.log(`Name: ${sizeName}`); //Ihre Bestellung: Grande

  const sizeName2:string = Size[Size.Large];
  console.log(sizeName2);

  enum Status {
    Initialized = 'INITIALIZED',
    Started = 'STARTED',
    Finished =  'FINISHED',
  }

  class Upload {
    progress = 0;
    status: Status = Status.Initialized;
  }


  function printUploadStatus(status: Status) {
    if (status === 'INITIALIZED') {
      console.log('Der Upload wurde initialisiert')
    }
    switch (status) {
        case Status.Initialized:
          console.log('Der Upload wurde initialisiert');
          break;
        case Status.Started:
          console.log('Der Upload wurde gestartet');
          break;
        case Status.Finished:
          console.log('Der Upload wurde beendet');
          break;
    }
  }
    let uploadStatus = Status.Initialized;
    printUploadStatus(uploadStatus);

    console.log(uploadStatus); // 'INITIALIZED'
    console.log(uploadStatus === 'INITIALIZED'); // true

    console.log(uploadStatus)

  updateUploadStatus(42, Status.Started);
  function updateUploadStatus(id: number, newStatus: Status) {
    const body = {status: newStatus}; // { status: 'STARTED'}
  //  this.http.put(`${BASE_URL}/${id}`, {status: status})
  }


  // --------------------------- Array -----------------------------------

  const numbers: number[] = [1, 2, 3];
  const strings: Array<string> = ["Yes", "No"];

  const lowerCaseStrings = strings.map((element) => {
    return element.toLocaleLowerCase();
  });



  //list.push("Hallo") //Argument of type 'string' is not assignable to parameter of type 'number'.

  // --------------------------- Tuple -----------------------------------

  let tuple:[string, number];
  tuple = ["foo", 42];
  console.log(tuple[0].toUpperCase());
 // console.log(tuple[1].toUpperCase()); // Property 'toUpperCase' does not exist on type 'number'.

  let tuple2 = ["foo", 42, 4711, "bar"];
  //x = [5,"test"]; // Type '[number, string]' is not assignable to type '[string, number]'


  // --------------------------- Any -----------------------------------
  let someValue: any = "foo";
  someValue = 42;
  someValue = true;

  someValue = 42;
//  const upperValue = someValue.toUpperCase(); => Laufzeitfehler

  const list: any[] = ["foo", 42, true];

// --------------------------- object ---------------------------------

  let myObject: object = {foo: 'bar'};
  myObject = {baz: 'qux'};
//  myObject = 42; // Type 42 is not assignable to type object

  let myNumber: number;
  let myObject1: object;
  myObject1 = Object.assign({}, {baz: 'qux'});
//  myNumber =  Object.assign({},  {baz: 'qux'});

    Object.create


// --------------------------- void -----------------------------------

  function logWithTimeStamp(value: string) :void {
    console.log(`${new Date()}: ${value}`);
  }

  const logMessage = logWithTimeStamp("User logged in"); //ok! void ist gültiger Typ
  console.log(logMessage); // trotzdem Ausgabe von Undefined!


// --------------------------- null  -----------------------------------

  function printLength(str: any) {
    if (str) {
      console.log(str.length);
    }
  }

  function safePrintLength(str: string) {
    console.log(str.length);
  }

//  let myString: string;

  //myString = undefined; //Type 'undefined' is not assignable to type 'string'.

  // const myNullInitializedValue = null;
 // safePrintLength(myNullInitializedValue); // Argument of type 'null' is not assignable to parameter of type 'string'.


 let nullIsOk: string | null;

  nullIsOk = null;
  nullIsOk = 'Foo';

  safePrintLength(nullIsOk);


// --------------------------- Type Assertions -----------------------------------
  function getName()  {
    return "John Doe";
  }

  const name = <string> getName();
  const name2 = getName() as string;
  console.log(name.toUpperCase()); // JOHN DOE
//  console.log(name2.toFixed(2)); // Uncaught TypeError: name.toFixed is not a function
//  name.toFixed(2); //Property 'toFixed' does not exist on type 'string'.

// name.toFixed(); //Compile-Fehler: Error:(120, 6) TS2339: Property 'toFixed' does not exist on type 'string'.

//getName().toFixed(); // Laufzeit-Fehler: Compiler akzeptiert den Aufruf


  function square (val: number) : number {
    return val * val;
  }

}



