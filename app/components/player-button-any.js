import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: ['playerAnyButton'],

  init() {
    this._super(...arguments);

    this.players = this.players || [];
  },

  playerKeys: computed('players', function() {
    return this.get('players').reduce(
      (hash, player) => {
        ['red', 'yellow', 'green', 'blue'].forEach(
          color => hash[player.getKeyForColor(color)] = player
        );
        return hash;
      },
      {}
    );
  }),

  actions: {
    selectedByPlayer(player) {
      this.get('onselect')(player);
    }
  }
});
