import Ember from "ember";

export default Ember.Controller.extend({
  needs: ['application'],
  currentUser: Ember.computed.alias('controllers.application.currentUser'),
  winner_phrase: "...",
  participants: [],

  actions: {
    restart() {
      this.transitionToRoute('quiz', this.model);
    },
    announceWinners(winner_names, participants) {
	   	this.set('participants', []);
      if (winner_names.length === 1) {
        this.set('winner_phrase', 'the winner is ' + winner_names[0]);
      } else {
        this.set('winner_phrase', 'a tie! The winners are ' + winner_names[0]);
        for (var i = 1; i < winner_names.get('length'); i++) {
          this.set('winner_phrase', this.get('winner_phrase') + ' and ' + winner_names[i]);
        }
      }
      for(var participant in participants) {
        this.get('participants').push({name: participant, points: participants[participant]['points']});
      }
    },
    backToIndex() {
      this.transitionToRoute('quizzes');
    }
  }
});
