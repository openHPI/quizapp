import Ember from 'ember';

export default Ember.Controller.extend({
  quizzes: Ember.computed('model', function() {
    return this.get('model').map((quiz, index) => ({
      id: quiz.get('id'),
      title: quiz.get('title'),
      description: quiz.get('description'),
      color: ['yellow', 'green', 'red', 'blue'][index],
      model: quiz
    }));
  }),

  actions: {
    selectQuiz(quiz, player) {
      this.transitionToRoute('quiz.index', quiz.id);
    }
  }
});
