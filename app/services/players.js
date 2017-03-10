import Ember from 'ember';

class ArrowPlayer {
  constructor(name) {
    this.name = name;
  }

  getKeyForColor(color) {
    return {
      yellow: 'ArrowUp',
      green: 'ArrowLeft',
      blue: 'ArrowDown',
      red: 'ArrowRight'
    }[color];
  }
}

class WasdPlayer {
  constructor(name) {
    this.name = name;
  }

  getKeyForColor(color) {
    return {
      yellow: 'KeyW',
      green: 'KeyA',
      blue: 'KeyS',
      red: 'KeyD'
    }[color];
  }
}

export default Ember.Service.extend({
  players: [],

  init() {
    this.get('players').pushObject(
      new WasdPlayer('player1')
    );

    this.get('players').pushObject(
      new ArrowPlayer('player2')
    );
  }
});
