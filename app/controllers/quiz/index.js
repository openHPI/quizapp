import Ember from "ember";

export default Ember.Controller.extend({
  userReady: false,
  needs: ['application'],
  currentUser: Ember.computed.alias('controllers.application.currentUser'),

  sortedUserItems: function(){
    return this.store.find('user');
    //return this.model.get('participants').sortBy('points');
  },
  actions: {
    ready: function() {
      console.log('Adding currentUser '+ this.get('currentUser.name'));
      this.model.get('participants').addObject(this.get('currentUser'));
      this.set('userReady', true);
    },
    start: function() {
      console.log('Start - Get first quiz question');
      var self = this;

      this.model.reset();

      this.model.get("questions").then( function(questions) {
        self.transitionToRoute('question', questions.objectAt(0));
      });
    },

    nextQuestion: function() {
      console.log('nextQuestion');

      var nextQuestion = this.model.getNextQuestion();

      if (nextQuestion === undefined) {
        console.log('Quiz finished');
        this.set('userReady', false);
        this.transitionToRoute('quiz.stats');
      } else {
        console.log('Call websocket server for nextQuestion');
        this.send('emit', {question_id: nextQuestion.id}, true, 'socket1');
      }
    }
  }
});
