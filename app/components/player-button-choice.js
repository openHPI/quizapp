import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['playerChoiceButton'],
  classNameBindings: ['color'],

  game: Ember.inject.service(),

  players: null,
  activePlayers: Ember.computed.or('players', 'game.activePlayers'),

  playerKeys: Ember.computed('activePlayers', function() {
    return this.get('activePlayers').reduce(
      (hash, player) => {
        hash[player.getKeyForColor(this.get('color'))] = player;
        return hash;
      },
      {}
    );
  }),

  color: Ember.computed('index', function() {
    return ['yellow', 'green', 'red', 'blue'][this.get('index')];
  }),

  actions: {
    selectedByPlayer(player) {
      this.sendAction('onselect', player);
    }
  }
});
