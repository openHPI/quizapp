import Ember from "ember";

export default Ember.Controller.extend({
  actions: {
    answerSelector: function(answer, question_id) {
      var self = this;

      this.store.find("question", question_id).then( function(question) {
        console.log("Question " + question_id + " selected");
        console.log(answer.get("correct"));
        console.log(question.get("title"));
        console.log(question.get("answers"));
        if (answer.get("correct") === true) {
          console.log('Update Points');
          question.get('quiz').updatePoints();          
        }
      });

      self.transitionToRoute('quiz.waiting');
    }
  }
});
