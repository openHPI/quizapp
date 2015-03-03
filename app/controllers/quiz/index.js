import Ember from "ember";
//import DS from 'ember-data';

export default Ember.ObjectController.extend({
  question: null,
  points: 0,

  actions: {
    start: function() {
      //Ember.set(question, this.model.get("questions").first);
      },
    answerSelector: function(answer, question_id) {
      var self = this;

      this.store.find("question", question_id).then( function(question) {
        console.log("Question " + question_id + " selected");
        console.log(answer.get("correct"));
        console.log(question.get("title"));
        console.log(question.get("answers"));
        if (answer.get("correct") === true) {
          console.log(self.get("points"));
          self.set("points", self.get("points")+1);
        }
      });
    }
  }
});
