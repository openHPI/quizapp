import Ember from "ember";

export default Ember.Controller.extend({
  actions: {
    restart: function() {
      console.log('Restart Quiz');
      this.transitionToRoute('quiz', this.model);
    }
  }
});
