import Ember from 'ember';

export default Ember.Component.extend({
  players: Ember.inject.service(),

  classNames: ['playerChoiceButton'],
  classNameBindings: ['color'],

  playerKeys: Ember.computed('players.players', function() {
    return this.get('players.players').reduce(
      (hash, player) => {
        hash[player.getKeyForColor(this.get('color'))] = player;
        return hash;
      },
      {}
    );
  }),

  actions: {
    selectedByPlayer(player) {
      this.sendAction('onselect', player);
    }
  }
});
