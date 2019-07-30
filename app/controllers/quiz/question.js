import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    goToNextQuestion() {
      const nextQuestion = this.get('model.quiz.questions').objectAt(this.get('model.relativeId'));

      if (nextQuestion) {
        this.transitionToRoute('quiz.question', this.get('model.quiz'), nextQuestion);
      } else {
        this.transitionToRoute('quiz.stats', this.get('model.quiz'));
      }
    }
  }
});
