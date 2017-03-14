import Ember from 'ember';

export default Ember.Controller.extend({
  registerAnswer(answer) {
    const question = answer.get('question');

    question.set('submitted', true);
    answer.set('selected', true);

    this.transitionToRoute('quiz.question.waiting', question.get('quiz'), question);
  },

  actions: {
    selectAnswer(answer) {
      console.log('selectAnswer', ...arguments);
      this.registerAnswer(answer);
    },
    timeUp() {
      this.transitionToRoute('quiz.question.waiting', this.model.get('quiz'), this.model);
    }
  }
});
