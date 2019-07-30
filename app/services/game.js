import EmberObject from '@ember/object';
import Service from '@ember/service';
import { computed } from '@ember/object';
import { and, bool, filterBy, sort } from '@ember/object/computed';

let playerIndex = 0;

const Player = EmberObject.extend({
  init() {
    this._super(...arguments);

    this.reset();
    this.number = ++playerIndex;
  },

  reset() {
    this.setProperties({active: false, joined: false, points: 0, correctAnswers: 0});
  },

  receivePoints(amount) {
    this.incrementProperty('points', amount);
  },

  correctAnswer() {
    this.incrementProperty('correctAnswers');
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

export default Service.extend({
  init() {
    this._super(...arguments);

    this.players = this.players || [];

    this.get('players').pushObject(
      ArrowPlayer.create({name: 'Spieler 1'})
    );

    this.get('players').pushObject(
      WasdPlayer.create({name: 'Spieler 2'})
    );

    this.set('started', false);
  },

  joinedPlayers: filterBy('players', 'joined'),
  idlePlayers: filterBy('players', 'joined', false),
  activePlayers: filterBy('players', 'active'),

  start() {
    this.set('started', true);
  },

  reset() {
    this.get('players').forEach(
      player => player.reset()
    );
    this.set('started', false);
  },

  hasPlayers: bool('joinedPlayers.length'),
  hasStarted: and('hasPlayers', 'started'),

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

  hasWinner: bool('winner'),

  sortByPoints: Object.freeze(['points:desc']),
  sortedPlayers: sort('joinedPlayers', 'sortByPoints'),
  winner: computed('joinedPlayers.*.points', function() {
    // If there are no players, there is no winner, duh!
    if (this.get('joinedPlayers.length') === 0) {
      return;
    }

    const sortedPlayers = this.get('sortedPlayers');

    // If there are multiple players with the same number of points, we don't have a winner either
    if (sortedPlayers.length > 1 && sortedPlayers[0].get('points') === sortedPlayers[1].get('points')) {
      return;
    }

    // Otherwise, the player with the most points takes it all!
    return sortedPlayers[0];
  })
});
