import Ember from "ember";

export default Ember.Controller.extend({
  userReady: false,
  needs: ['application'],
  currentUser: Ember.computed.alias('controllers.application.currentUser'),

  sortedUserItems: function(){
    return this.store.find('user');
  },
  actions: {
    ready: function() {
      var currentUser = this.get('currentUser');
      this.send('emit', {new_quiz_participant: {user_id: currentUser.id, quiz_id: this.model.id}}, true, 'socket1');
      this.set('userReady', true);
    },
    start: function() {
      this.send('emit', {start_quiz: this.model.id}, true, 'socket1');
    },
    nextQuestion: function() {
      var nextQuestion = this.model.getNextQuestion();
      if (nextQuestion === undefined) {
        this.set('userReady', false);
        this.send('emit', {finish_quiz: this.model.id}, true, 'socket1');
      } else {
        this.send('emit', {next_question: nextQuestion.id, quiz_id: this.model.id}, true, 'socket1');
      }
    }
  }
});
