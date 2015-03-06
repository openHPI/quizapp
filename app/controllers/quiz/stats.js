import Ember from "ember";

export default Ember.Controller.extend({
	winner_name: "...",

  actions: {
    restart: function() {
      this.transitionToRoute('quiz', this.model);
    },
    announceWinner: function(winner_name) {
    	this.set('winner_name', winner_name);
    }
  }
});
