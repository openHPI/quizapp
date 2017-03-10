import Ember from 'ember';

export default Ember.Controller.extend({
  quizzes: Ember.computed.alias('model'),

  actions: {
    selectQuiz(quiz, player) {
      console.log('player', player.get('name'), 'selected the quiz', quiz.get('title'));
      player.set('active', true);
      this.transitionToRoute('quiz.index', quiz);
    }
  }
});
