import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['quiz/index','application'],
  currentUser: Ember.computed.alias('controllers.application.currentUser'),
  quiz: Ember.computed.alias('controllers.quiz/index.model'),

  registerAnswer(answer) {
    const question = answer.get('question');

    question.set('submitted', true);
    answer.set('selected', true);

    this.transitionToRoute('quiz.question.waiting', question.get('quiz'), question);
  },

  actions: {
    keyPressed() {
      console.log('keyPressed', ...arguments);
    },
    selectAnswer(answer) {
      console.log('selectAnswer', ...arguments);
      this.registerAnswer(answer);
    },
    timeUp() {
      this.transitionToRoute('quiz.question.waiting', this.model.get('quiz'), this.model);
    },
    resetCountdown() {
      this.get('progress-bar').renderElement();
    }
  }
});
