import {Component} from '@angular/core';

class Message {
  cssClasses: string[] = [];

  constructor(public text: string,
              public severity: string,
              public success: boolean) {

    this.cssClasses.push(success ? 'success' : 'alert');
    if (severity === 'high') {
      this.cssClasses.push('bordered');
    }
  }
}

interface Player {
  name: string;
  score: number;
}

@Component({
  selector: 'ch-standard-direktiven',
  templateUrl: 'standard-direktiven.component.html',
  styleUrls: ['standard-direktiven.component.css'],
})
export class StandardDirektivenComponent {


  // NgIf
  showDiv = true;
  x = 7;
  bordered = false;
  display = 'true';

  // NgSwitch
  myVariable = 1;

  // NgClass
  message = {};

  // NgStyle
  fontStyle = 'italic';
  fontSize = 12;

  // NgFor
  friends = [];
  cities = [];
  players = [
    {name: 'John', score: 20},
    {name: 'Mary', score: 80},
    {name: 'Joe', score: 30},
    {name: 'Lisa', score: 50},
  ];

  doubleNumbers = [1, 2, 3, 42, 42];

  constructor() {
    this.message = new Message(
      'Juchuu, es hat geklappt',
      'high',
      true
    );

    this.friends = ['Bob', 'Jane', 'John', 'Mary'];

    this.cities = [
      {name: 'Shanghai', country: 'China', population: '24,1 million'},
      {name: 'Karachi', country: 'Pakistan', population: '23,5 million'},
      {name: 'Beijing', country: 'China', population: '21,5 million'},
      {name: 'Tianjin', country: 'China', population: '14,7 million'},
      {name: 'Istanbul', country: 'Turkey', population: '14,3 million'}
    ];
  }

  refreshPlayers() {
    const newPlayers = [];
    for (const player of this.players) {
      const inc = Math.random() > 0.4;
      const newScore = inc ? player.score + 1 : player.score - 1;
      newPlayers.push({name: player.name, score: newScore});
    }
    this.players = newPlayers;
  }
  ngOnInit() {
    window.setInterval(() => {
      this.refreshPlayers();
    }, 2000);
  }

  playerTrackBy(index: number, player: Player) {
    return player.name;
  }

  calculateVisibility() {
    return true;
  }

  showBorder() {
    return this.bordered;
  }

  addFriend(friend) {
    this.friends.push(friend);
  }
}
