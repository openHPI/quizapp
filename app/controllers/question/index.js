import Ember from "ember";

export default Ember.Controller.extend({
  needs: ["quiz/index"],

  actions: {
    answerSelector: function(answer, question_id) {
      this.store.find("question", question_id).then( function(question) {
        question.set('submitted', true);
        if (answer.get("correct") === true) {
          question.get('quiz').updatePoints();
        }
      });

      this.get('controllers.quiz/index').send('nextQuestion');
    },
    resetCountdown: function() {
      this.get('progress-bar').renderElement();
    }
  }
});
