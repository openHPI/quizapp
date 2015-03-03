import Ember from "ember";

export default Ember.Controller.extend({
  points: 0,

  actions: {
    start: function() {
      console.log('Start - Get first quiz question');
      var self = this;
      this.model.get("questions").then( function(questions) {                        
        self.transitionToRoute('question', questions.objectAt(0));
      });      
    },
    nextQuestion: function() {
      console.log('nextQuestion - call Websocket');
      this.send('emit', "hello socket", 'socket1');
    }
  }
});
