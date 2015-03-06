import Ember from "ember";

export default Ember.Controller.extend({
  needs: ['quiz/index','application'],
  currentUser: Ember.computed.alias('controllers.application.currentUser'),

  actions: {
    answerSelector: function(answer, question_id) {
      var self = this;
      var correctAnswer = false;
      this.store.find("question", question_id).then( function(question) {
        question.set('submitted', true);
        if (answer.get("correct") === true) {
          correctAnswer = true;
        }
        self.get('controllers.quiz/index').send('nextQuestion', correctAnswer);
      });
    },
    resetCountdown: function() {
      this.get('progress-bar').renderElement();
    }
  }
});
