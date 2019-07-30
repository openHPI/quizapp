import Controller from '@ember/controller';
import { inject } from '@ember/service';
import { computed } from '@ember/object';
import { alias } from '@ember/object/computed';

export default Controller.extend({
  game: inject(),

  winner_phrase: '...',

  players: alias('game.players'),

  init() {
    this._super(...arguments);

    this.participants = this.participants || [];
  },

  QRPath: computed('model', function() {
    return '/images/' + this.get('model.id') + '.png';
  }),

  actions: {
    restart() {
      this.transitionToRoute('quiz', this.model);
    },
    announceWinners(winner_names, participants) {
      this.set('participants', []);
      if (winner_names.length === 1) {
        this.set('winner_phrase', 'the winner is ' + winner_names[0]);
      } else {
        this.set('winner_phrase', 'a tie! The winners are ' + winner_names[0]);
        for (let i = 1; i < winner_names.get('length'); i++) {
          this.set('winner_phrase', this.get('winner_phrase') + ' and ' + winner_names[i]);
        }
      }
      for (let participant in participants) {
        this.get('participants').push({name: participant, points: participants[participant]['points']});
      }
    },
    backToIndex() {
      this.transitionToRoute('quizzes');
    }
  }
});
