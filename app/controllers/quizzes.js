import Ember from 'ember';

export default Ember.Controller.extend({
  game: Ember.inject.service(),

  currentSlide: 0,
  quizzes: Ember.computed.alias('model'),
  players: Ember.computed.alias('game.players'),

  fullPath: Ember.computed('currentSlide', function() {
    return '/images/course' + this.get('currentSlide') + '.png';
  }),

  actions: {
    selectCurrentQuiz(player) {
      let quiz=this.get('quizzes').objectAt(this.get('currentSlide'));
      console.log('player', player.get('name'), 'selected the quiz', quiz.get('title'));
      player.set('joined', true);
      player.set('active', false);
      this.transitionToRoute('quiz.index', quiz);
    }
  }
});
