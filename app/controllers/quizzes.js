import Ember from 'ember';

export default Ember.Controller.extend({
  game: Ember.inject.service(),

  quiz: Ember.computed.alias('model'),
  players: Ember.computed.alias('game.players'),

  actions: {
    selectQuiz(quiz, player) {
      console.log('player', player.get('name'), 'selected the quiz', quiz.get('title'));
      player.set('joined', true);
      player.set('active', false);
      this.transitionToRoute('quiz.index', quiz);
    }
  }
});
