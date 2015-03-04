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
      console.log('nextQuestion');
      
      var nextQuestion = this.model.getNextQuestion();

      if (nextQuestion === undefined) {
        console.log('Quiz finished');
        this.transitionToRoute('quiz.stats');
      } else {
        console.log('Call websocket server for nextQuestion');
        this.send('emit', {question_id: nextQuestion.id}, true, 'socket1');
      }
    }
  }
});
