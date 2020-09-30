'use strict';

const players = ['John', 'Jane', 'Bob'];
for (const player of players) {
  console.log(player);
}

for (let i = 0;i < players.length; i++) {
  console.log(players[i]);
}

class Team {
  constructor(players) {
    this.players = players;
  }
  [Symbol.iterator]() {
    let index = 0;
    return  {
      next: () => {
        return {
          value: this.players[index++],
          done: index > this.players.length
        };
      }
    }
  }
}

const myTeam = new Team(['John', 'Jane', 'Bob']);
for (const player of myTeam) {
  console.log(player); //John, Jane, Bob
}

const squares = {
  [Symbol.iterator]() {
    let value = 1;
    return {
      next() {
        const square = Math.pow(value++, 2);
        return { done: false, value: square }
      }
    }
  }
};

for (const square of squares) {
  if (square > 100)
    break;
  console.log(square); //1, 4, 9, 16 ...
}

