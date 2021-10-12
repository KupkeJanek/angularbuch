
function containsAll(array) {
    const elements = Array.prototype.slice.call(arguments, 1);
    for (let i = 0; i < elements.length; i++) {
        if (array.indexOf(elements[i]) === -1){
            return false;
        }
    }
    return true;
}

function containsAll2(array, ...elements) {
    for (let i = 0; i < elements.length; i++) {
        if (array.indexOf(elements[i]) === -1){
            return false;
        }
    }
    return true;
}


const people = ['John', 'Jane', 'Bob'];
const colleagues = ['Bob', 'Lisa'];

console.log(containsAll(people, 'Jane', 'Bob')); //Ausgabe: true
console.log(containsAll(people, 'Jane', 'Lisa')); //Ausgabe: false

console.log(containsAll(people, ...colleagues)); //Ausgabe: true

//const colleagues = ['Bob', 'Lisa'];


//const peopleIKnow = ['John', 'Jane'];
//Array.prototype.push.apply(peopleIKnow, colleagues);
//console.log(peopleIKnow);  //Ausgabe: ['John','Jane','Bob','Lisa']

const peopleIKnow = ['John', 'Jane'];
const colleagues2 = ['Bob', 'Lisa'];

peopleIKnow.push(...colleagues2);

console.log(peopleIKnow);  //Ausgabe: ['John','Jane','Bob','Lisa']

const family = ['Mom', 'Dad', 'Susi'];
const friends = ['Steve', 'Mary'];

const inviteToParty = ['John', ...family, ...friends, 'Bob'];

console.log('Invite: ', inviteToParty) //  ['John','Mom','Dad','Susi','Steve','Mary','Bob']
