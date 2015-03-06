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
      this.send('emit', {new_quiz_participant: {user_id: currentUser.id, quiz_id: this.model.id}}, true, 'socket1');
      this.set('userReady', true);
    },
    start: function() {
      console.log('Start - Get first quiz question');

      this.model.reset();

      this.send('emit', {start_quiz: this.model.id}, true, 'socket1');
    },

    nextQuestion: function(correctAnswer) {
      console.log('nextQuestion');
      var nextQuestion = this.model.getNextQuestion();
      if (nextQuestion === undefined) {
        console.log('Quiz finished');
        this.set('userReady', false);
        this.send('emit', {finish_quiz: this.model.id, correct_answer: correctAnswer}, true, 'socket1');
      } else {
        console.log('Call websocket server for nextQuestion');
        this.send('emit', {question_id: nextQuestion.id, correct_answer: correctAnswer}, true, 'socket1');
      }
    }
  }
});
