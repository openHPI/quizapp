import Ember from "ember";

export default Ember.Controller.extend({
  needs: ['quiz/index','application'],
  currentUser: Ember.computed.alias('controllers.application.currentUser'),

  actions: {
    answerSelector: function(answer, question_id) {
      var self = this;
      this.store.find("question", question_id).then( function(question) {
        question.set('submitted', true);
        if (answer.get("correct") === true) {
          console.log('Grant points to ' + self.get('currentUser.name'));
          self.get('currentUser').updatePoints();
        }
      });

      this.get('controllers.quiz/index').send('nextQuestion');
    },
    resetCountdown: function() {
      this.get('progress-bar').renderElement();
    }
  }
});
