import Component from '@ember/component';
import { computed } from '@ember/object';
import { or } from '@ember/object/computed';
import { inject } from '@ember/service';

export default Component.extend({
  classNames: ['playerChoiceButton'],
  classNameBindings: ['color'],

  game: inject(),

  players: null,
  activePlayers: or('players', 'game.activePlayers'),

  playerKeys: computed('activePlayers', function() {
    return this.get('activePlayers').reduce(
      (hash, player) => {
        hash[player.getKeyForColor(this.get('color'))] = player;
        return hash;
      },
      {}
    );
  }),

  color: computed('index', function() {
    return ['red', 'yellow', 'green', 'blue'][this.get('index')];
  }),

  actions: {
    selectedByPlayer(player) {
      this.get('onselect')(player);
    }
  }
});
