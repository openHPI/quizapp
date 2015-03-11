import Ember from "ember";

export default Ember.Controller.extend({
  needs: ['quiz/index','application'],
  currentUser: Ember.computed.alias('controllers.application.currentUser'),
  quiz: Ember.computed.alias('controllers.quiz/index.model'),

  actions: {
    answerSelector: function(answer, question_id) {
      var self = this;
      answer.set('selected', true);
      var correctAnswer = false;
      this.store.find("question", question_id).then( function(question) {
        question.set('submitted', true);
        if (answer.get("correct") === true) {
          correctAnswer = true;
        }
        self.send('emit', {question_answered: self.model.id, quiz_id: self.model.get('quiz').id, correct_answer: correctAnswer, answer_id: answer.id}, true, 'socket1');
        self.transitionToRoute('question.waiting', question);
      });
    },
    resetCountdown: function() {
      this.get('progress-bar').renderElement();
    }
  }
});
