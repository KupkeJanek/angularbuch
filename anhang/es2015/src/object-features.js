const user = {
  name: 'John Doe'
};
const activateProperties = {
  active: true,
  deleted: false
};
console.log(' -------------Object.assign -----------------');

const activatedUser = Object.assign(user, activateProperties);
console.log(user); // {'name':'John Doe','active':true,'deleted':false}
console.log(activatedUser); // {'name':'John Doe','active':true,'deleted':false}

const todo = {
  title: 'Aufräumen',
  description: 'Zuerst das Arbeitszimmer, dann die Küche...',
  status: 'BACKLOG'
};
const newTodo = Object.assign({}, todo, {
  status: 'IN_PROGRESS'
});
console.log(newTodo); // {'title':'Aufräumen','description':'Zuerst das Arbeitszimmer, dann die Küche...','status':'IN_PROGRESS'}
console.log(newTodo === todo); //false


console.log(' -------------Object.entries -----------------');

const user2 = {
  firstName: 'John',
  lastName: 'Doe'
};
const entries = Object.entries(user2);
console.log(entries);

for (const entry of entries) {
  console.log(`${entry[0]}: ${entry[1]}`);
}

for (const [key, value] of entries) {
    console.log(`${key}: ${value}`);
}

console.log(' -------------Object.values -----------------');

console.log(Object.values(user2));


