import Controller from '@ember/controller';
import { inject } from '@ember/service';
import { computed } from '@ember/object';
import { alias } from '@ember/object/computed';

export default Controller.extend({
  game: inject(),

  currentSlide: 0,
  quizzes: alias('model'),
  players: alias('game.players'),

  fullPath: computed('currentSlide', function() {
    return '/images/course' + this.get('currentSlide') + '.png';
  }),

  actions: {
    selectCurrentQuiz(player) {
      let quiz = this.get('quizzes').objectAt(this.get('currentSlide'));
      player.set('joined', true);
      player.set('active', false);
      this.transitionToRoute('quiz.index', quiz);
    }
  }
});
