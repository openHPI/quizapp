import Ember from 'ember';

export default Ember.Controller.extend({
  playersService: Ember.inject.service('players'),

  quizzes: Ember.computed.alias('model'),
  players: Ember.computed.alias('playersService.players'),

  actions: {
    selectQuiz(quiz, player) {
      console.log('player', player.get('name'), 'selected the quiz', quiz.get('title'));
      player.set('active', true);
      this.transitionToRoute('quiz.index', quiz);
    }
  }
});
