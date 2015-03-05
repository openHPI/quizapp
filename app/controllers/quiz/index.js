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
      var currentUser = this.get('currentUser');
      console.log('Notify server about new_quiz_participant: '+ currentUser.name);
      this.send('emit', {new_quiz_participant: {user_id: currentUser.id, quiz_id: this.model.id}}, true, 'socket1');
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
