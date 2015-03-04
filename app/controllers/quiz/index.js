import Ember from "ember";

export default Ember.Controller.extend({
  points: 0,
  question_array: [],

  init: function() {

  },

  actions: {
    start: function() {
      console.log('Start - Get first quiz question');
      var self = this;
      this.model.get("questions").then( function(questions) {                        
        self.transitionToRoute('question', questions.objectAt(0));
      });      
    },
    nextQuestion: function(question_id) {
      console.log('nextQuestion - call Websocket');
      
      var nextQuestion = this.model.getNextQuestion();
      
      if (nextQuestion === undefined) {
        this.transitionToRoute('quiz.stats');
      } else {
        this.send('emit', {question_id: nextQuestion.id}, true, 'socket1');
      }
    }
  }
});
