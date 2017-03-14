import Ember from 'ember';

const Player = Ember.Object.extend({
  joined: false,
  active: false,
  name: null
});

const ArrowPlayer = Player.extend({
  getKeyForColor(color) {
    return {
      yellow: 'ArrowUp',
      green: 'ArrowLeft',
      blue: 'ArrowDown',
      red: 'ArrowRight'
    }[color];
  }
});

const WasdPlayer = Player.extend({
  getKeyForColor(color) {
    return {
      yellow: 'KeyW',
      green: 'KeyA',
      blue: 'KeyS',
      red: 'KeyD'
    }[color];
  }
});

export default Ember.Service.extend({
  players: [],

  init() {
    this.get('players').pushObject(
      WasdPlayer.create({name: 'player1'})
    );

    this.get('players').pushObject(
      ArrowPlayer.create({name: 'player2'})
    );
  },

  joinedPlayers: Ember.computed.filterBy('players', 'joined'),
  idlePlayers: Ember.computed.filterBy('players', 'joined', false),
  activePlayers: Ember.computed.filterBy('players', 'active')
});
