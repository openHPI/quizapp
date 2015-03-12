import Ember from "ember";

export default Ember.Controller.extend({
  currentUser: null,
  needs: ["question/index", "quiz/stats", "quiz/index"],

  setOrCreateUser: function(self, user, username) {
    if (user === undefined) {
      user = self.store.createRecord('user', {
        name: username
      });
      user.save();
    }
    return user;
  },
  updateParticipantPoints: function(self, participant, points) {
    this.store.findQuery('user', { name: participant }).then( function(user) {
      user = self.setOrCreateUser(self, user.objectAt(0), participant);
      user.set('points', points);
      user.save();
    });
  },

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
      var self = this;
      var user = null;
      var participant = null;
      var participants = null;

      if (data.hasOwnProperty('client_name')) {
        console.log('Logged in as ' + data["client_name"]);
        user = this.store.createRecord('user', {
          name: data["client_name"]
        });
        user.save();
        this.set('currentUser', user);
        var all_participants = data["all_participants"];
        for(var quiz_id in all_participants) { 
          self.store.find('quiz', quiz_id).then( function(quiz) {
            for(participant in all_participants[quiz_id]) { 
              self.store.findQuery('user', { name: participant }).then( function(user) {
                user = self.setOrCreateUser(self, user.objectAt(0), participant);
                quiz.get('participants').addObject(user);
              });
            }
          });
        }
        this.transitionToRoute('quizzes');

      } else if (data.hasOwnProperty('finish_question')) {
        this.store.find('question', data["finish_question"]).then( function(question) {
          question.updateSelectionCount(data['question_answers']);
          self.get('controllers.quiz/index').send('nextQuestion');
          self.transitionToRoute('question.results', question);
        });
        participants = data["participants"];
        for(participant in participants) { 
          self.updateParticipantPoints(self, participant, participants[participant]['points']);
        }

      } else if (data.hasOwnProperty('new_question_id')) {
        var new_question_id = data["new_question_id"];
        this.transitionToRoute('question', new_question_id);
        this.get('controllers.question/index').send('resetCountdown');
      
      } else if (data.hasOwnProperty('start_quiz')) {
        this.store.find('quiz', data["start_quiz"]).then( function(quiz) {
          quiz.reset();
          var question = quiz.get('questions').objectAt(0);
          self.transitionToRoute('question', question);
        });

      } else if (data.hasOwnProperty('finish_quiz')) {
        participants = data["participants"];
        for(participant in participants) { 
          self.updateParticipantPoints(self, participant, participants[participant]['points']);
        }
        this.get('currentUser').set('within_quiz', false);
        this.get('controllers.quiz/stats').send('announceWinner', data["winner_name"], participants);
        this.transitionToRoute('quiz.stats');
        this.store.find('quiz', data['finish_quiz']).then( function(quiz) {
          quiz.removeAllParticipants();
        });

      } else if (data.hasOwnProperty('new_quiz_participant')) {
        var new_quiz_participant = data['new_quiz_participant'];
        this.store.find('quiz', new_quiz_participant['quiz_id']).then( function(quiz) {
          self.store.findQuery('user', { name: new_quiz_participant['user_name'] }).then( function(user) {
            user = self.setOrCreateUser(self, user.objectAt(0), new_quiz_participant['user_name']);
            quiz.get('participants').addObject(user);
            user.set('points', 0);
            user.save();
          });
        });
        user = this.get('currentUser');
        if (user.get('is_tv') && !user.get('within_quiz')) {this.transitionToRoute('quiz', new_quiz_participant['quiz_id']);
          user.set('within_quiz', true);
        }

      } else if (data.hasOwnProperty('disconnected_client')) {
        this.store.findQuery('user', { name: data['disconnected_client'] }).then( function(user) {
          user = user.objectAt(0);
          if (user !== undefined) {
            user.destroyRecord();
          }
        });

      // TV Screen Methods
      } else if (data.hasOwnProperty('tv_client')) {
        console.log('Logged in as ' + data["tv_client"]);
        user = this.store.createRecord('user', {
          name: data["tv_client"],
          is_tv: true,
        });
        user.save();
        this.set('currentUser', user);
        this.transitionToRoute('/quizzes');
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
      this.send('emit', {new_user: name}, true, 'socket1');
    },
    logout: function() {
      this.send('emit', {user_logout: this.get('currentUser').get('name')}, true, 'socket1');
      this.get('controllers.quiz/index').set('userReady', false);
      this.set('currentUser', null);
      this.transitionToRoute('/');
    }
  }
});
