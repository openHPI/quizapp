import Ember from 'ember';

const Player = Ember.Object.extend({
  joined: false,
  active: false,
  name: null
});

const ArrowPlayer = Player.extend({
  getKeyForColor(color) {
    return {
      red: 'ArrowLeft',
      yellow: 'ArrowUp',
      green: 'ArrowDown',
      blue: 'ArrowRight'
    }[color];
  }
});

const WasdPlayer = Player.extend({
  getKeyForColor(color) {
    return {
      red: 'KeyA',
      yellow: 'KeyW',
      green: 'KeyS',
      blue: 'KeyD'
    }[color];
  }
});

export default Ember.Service.extend({
  players: [],

  init() {
    this.get('players').pushObject(
      ArrowPlayer.create({name: 'Player 1'})
    );

    this.get('players').pushObject(
      WasdPlayer.create({name: 'Player 2'})
    );
  },

  joinedPlayers: Ember.computed.filterBy('players', 'joined'),
  idlePlayers: Ember.computed.filterBy('players', 'joined', false),
  activePlayers: Ember.computed.filterBy('players', 'active'),

  resetAllPlayers() {
    this.get('players').forEach(
      player => player.setProperties({active: false, joined: false})
    );
  },

  deactivateAllPlayers() {
    this.get('players').forEach(
      player => player.set('active', false)
    );
  },

  activateJoinedPlayers() {
    this.get('joinedPlayers').forEach(
      player => player.set('active', player.get('joined'))
    );
  }
});
