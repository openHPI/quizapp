import Ember from "ember";

export default Ember.Controller.extend({
  actions: {
    answerSelector: function(answer_id) {
      console.log("Answer " + answer_id + " selected");
    }
  }
});
