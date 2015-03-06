import Ember from "ember";

export default Ember.Controller.extend({
  currentUser: null,
  needs: ["question/index"],

  actions: {
    // Websocket actions
    onopen: function(socketEvent) {
      console.log('On open has been called!');
      console.log(socketEvent);
    },
    onmessage: function(socketEvent) {
      console.log('On message has been called!');
      console.log(socketEvent);
      var data = JSON.parse(socketEvent.data);

      if (data.hasOwnProperty('new_question_id')) {
        var new_question_id = data["new_question_id"];
        this.transitionToRoute('question', new_question_id);
        this.get('controllers.question/index').send('resetCountdown');
      } else if (data.hasOwnProperty('new_quiz_participant')) {
        var participant = data['new_quiz_participant'];

        var self = this;
        this.store.findQuery('user', { name: participant['user_name'] }).then( function(user) {
          if (user.objectAt(0) === undefined) {
            user = self.store.createRecord('user', {
              name: participant['user_name']
            });
          } else {
            user = user.objectAt(0);
          }
          self.store.find('quiz', participant['quiz_id']).then( function(quiz) {
            quiz.get('participants').addObject(user);
          });
        });
      }
    },
    onclose: function(socketEvent) {
      console.log('On close has been called!');
      console.log(socketEvent);
    },
    onerror: function(socketEvent) {
      console.log('On error has been called! :-(');
      console.log(socketEvent);
    },
    login: function() {
      var name = username.value;
      console.log('Logged in as ' + name);
      var user = this.store.createRecord('user', {
        name: name
      });
      user.save();

      this.set('currentUser', user);

      this.send('emit', {new_user: name}, true, 'socket1');
      this.transitionToRoute('quizzes');
    },
    logout: function() {
      this.set('currentUser', null);
      this.transitionToRoute('/');
    }
  }
});
