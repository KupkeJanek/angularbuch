const array = [1,2,3,4];

// normale anonyme Funktion
const squares_old = array.map(function(elem) {
    return elem * elem;
});
console.log(squares_old);

// arrow function
const squares = array.map((elem) => {
    return elem * elem
});

const squares2 = array.map(elem => elem * elem);
console.log(squares2); // Ausgabe: 1, 4, 9, 16

const sum = array.reduce((a, b) => a + b);
console.log(sum); // Ausgabe: 10

function Counter() {
    const self = this;
    self.count = 0;
    setInterval(function() {
        self.count++;
    }, 1000);
}

const c = new Counter();
console.log(c.count); // Ausgabe: 0
setTimeout(function(){
    console.log(c.count);  // Ausgabe: 0
},2500);

function CounterNew() {
    this.count = 0;
    setInterval(() => {
        this.count ++;
    }, 1000 );
}

const c2 = new CounterNew();
console.log(c2.count); // Ausgabe: 0
setTimeout(function(){
    console.log(c2.count);  // Ausgabe: 2
},2500);