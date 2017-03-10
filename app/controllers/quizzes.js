import Ember from 'ember';

export default Ember.Controller.extend({
  quizzes: Ember.computed.alias('model'),

  actions: {
    selectQuiz(quiz, player) {
      console.log('player', player, 'selected a quiz');
      this.transitionToRoute('quiz.index', quiz);
    }
  }
});
