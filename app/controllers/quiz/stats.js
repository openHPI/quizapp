import Ember from "ember";

export default Ember.Controller.extend({
  actions: {
    restart: function() {
      console.log('Restart Quiz');
      var self = this;

      this.model.reset();

      this.model.get("questions").then( function(questions) {
        self.transitionToRoute('question', questions.objectAt(0));
      });
    }
  }
});
