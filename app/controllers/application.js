import Ember from "ember";

export default Ember.Controller.extend({
  players: Ember.inject.service(),

  currentUser: null,
  needs: ["question/index", "quiz/stats", "quiz/index"],

  activePlayers: Ember.computed.alias('players.activePlayers'),

  setOrCreateUser(self, user, username) {
    if (user === undefined) {
      user = self.store.createRecord('user', {
        name: username
      });
      user.save();
    }
    return user;
  },
  updateParticipantPoints(self, participant, points) {
    this.store.findQuery('user', { name: participant }).then( function(user) {
      user = self.setOrCreateUser(self, user.objectAt(0), participant);
      user.set('points', points);
      user.set('answered', false);
      user.save();
    });
  },

  actions: {
    // Websocket actions
    onopen(socketEvent) {
      console.log('On open has been called!');
      console.log(socketEvent);
    },
    onmessage(socketEvent) {
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
          this.store.find('quiz', quiz_id).then( function(quiz) {
            for(participant in all_participants[quiz_id]) {
              self.store.findQuery('user', { name: participant }).then( function(user) {
                if (quiz.id === quiz_id) {
                  user = self.setOrCreateUser(self, user.objectAt(0), participant);
                  quiz.get('participants').addObject(user);
                }
              });
            }
          });
        }
        var path = window.location.pathname.split("/");
        if (path[1] === 'quiz' && !isNaN(path[2])) {
          this.transitionToRoute(window.location.pathname.substring(0,7));
        } else {
          this.transitionToRoute("quizzes");
        }

      } else if (data.hasOwnProperty('user_answered')) {
        var user_name = data['user_answered'];
        this.store.findQuery('user', { name: user_name }).then( function(user) {
          user = self.setOrCreateUser(self, user.objectAt(0), user_name);
          user.set('answered', true);
        });

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
        this.get('controllers.quiz/stats').send('announceWinners', data["winner_names"], participants);
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
        if (user.get('is_tv') && !user.get('within_quiz')) {
          this.transitionToRoute('quiz', new_quiz_participant['quiz_id']);
          user.set('within_quiz', true);
        }

      } else if (data.hasOwnProperty('quiz_participant_quit')) {
        var quiz_participant_quit = data['quiz_participant_quit'];
        this.store.find('quiz', quiz_participant_quit['quiz_id']).then( function(quiz) {
          self.store.findQuery('user', { name: quiz_participant_quit['user_name'] }).then( function(user) {
            quiz.removeParticipant(user);

            user = self.get('currentUser');
            if (user.get('is_tv') && user.get('within_quiz')) {
              if(quiz.get('participants').get('length') === 0) {
                self.transitionToRoute('quizzes');
                user.set('within_quiz', false);
              }
            }
          });
        });

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
    }
  }
});
