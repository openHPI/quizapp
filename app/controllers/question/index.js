import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['quiz/index','application'],
  currentUser: Ember.computed.alias('controllers.application.currentUser'),
  quiz: Ember.computed.alias('controllers.quiz/index.model'),

  registerAnswer(answer) {
    const question = answer.get('question');

    question.set('submitted', true);
    answer.set('selected', true);

    this.transitionToRoute('question.waiting', question);
  },

  actions: {
    keyPressed() {
      console.log('keyPressed', ...arguments);
    },
    selectAnswer(answer) {
      this.registerAnswer(answer);
    },
    timeUp() {
      this.transitionToRoute('question.waiting', this.model);
    },
    resetCountdown() {
      this.get('progress-bar').renderElement();
    }
  }
});
