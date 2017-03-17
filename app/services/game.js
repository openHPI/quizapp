import Ember from 'ember';

let playerIndex = 0;

const Player = Ember.Object.extend({
  init() {
    this.reset();
    this.number = ++playerIndex;
  },

  reset() {
    this.setProperties({active: false, joined: false, points: 0});
  },

  receivePoints(amount) {
    this.incrementProperty('points', amount);
  },

  rememberAnswer(answer) {
    console.log('remember answer', answer, 'for', this);
  }
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

    this.set('started', false);
  },

  joinedPlayers: Ember.computed.filterBy('players', 'joined'),
  idlePlayers: Ember.computed.filterBy('players', 'joined', false),
  activePlayers: Ember.computed.filterBy('players', 'active'),

  start() {
    this.set('started', true);
  },

  reset() {
    this.get('players').forEach(
      player => player.reset()
    );
    this.set('started', false);
  },

  hasPlayers: Ember.computed.bool('joinedPlayers.length'),
  hasStarted: Ember.computed.and('hasPlayers', 'started'),

  deactivateAllPlayers() {
    this.get('players').forEach(
      player => player.set('active', false)
    );
  },

  activateJoinedPlayers() {
    this.get('joinedPlayers').forEach(
      player => player.set('active', player.get('joined'))
    );
  },

  hasThinkingPlayers() {
    return this.get('activePlayers.length') > 0;
  },

  hasWinner: Ember.computed.bool('winner'),

  winner: Ember.computed('joinedPlayers.*.points', function() {
    // If there are no players, there is no winner, duh!
    if (this.get('joinedPlayers.length') === 0) {
      return;
    }

    const sortedPlayers = this.get('joinedPlayers').sortBy('points:desc');

    // If there are multiple players with the same number of points, we don't have a winner either
    if (sortedPlayers.length > 1 && sortedPlayers[0].get('points') === sortedPlayers[1].get('points')) {
      return;
    }

    // Otherwise, the player with the most points takes it all!
    return sortedPlayers[0];
  })
});
