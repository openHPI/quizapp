import Ember from "ember";

export default Ember.Controller.extend({
	winner_name: "...",
	participants: [],

  actions: {
    restart: function() {
      this.transitionToRoute('quiz', this.model);
    },
    announceWinner: function(winner_name, participants) {
	   	this.set('participants', []);
    	this.set('winner_name', winner_name);
    	for(var participant in participants) {
    		this.get('participants').push({name: participant, points: participants[participant]['points']});
    	}
    }
  }
});
