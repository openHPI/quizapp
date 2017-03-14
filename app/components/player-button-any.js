import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['playerAnyButton'],

  players: [],

  playerKeys: Ember.computed('players', function() {
    return this.get('players').reduce(
      (hash, player) => {
        ['yellow', 'green', 'red', 'blue'].forEach(
          color => hash[player.getKeyForColor(color)] = player
        );
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
