import Ember from 'ember';

export default Ember.Controller.extend({
  userReady: false,

  sortedUserItems() {
    return this.store.find('user');
  },

  actions: {
    ready() {
      const currentUser = this.get('currentUser');
      this.send('emit', {new_quiz_participant: {user_id: currentUser.id, quiz_id: this.model.id}}, true, 'socket1');
      this.set('userReady', true);
    },
    quit() {
      const currentUser = this.get('currentUser');
      this.send('emit', {quiz_participant_quit: {user_id: currentUser.id, quiz_id: this.model.id}}, true, 'socket1');
      this.set('userReady', false);
    },
    start() {
      this.model.reset();
      const firstQuestion = this.model.get('questions').objectAt(0);
      this.transitionToRoute('question', firstQuestion);
    },
    nextQuestion() {
      const nextQuestion = this.model.getNextQuestion();
      if (nextQuestion === undefined) {
        this.set('userReady', false);
        this.send('emit', {finish_quiz: this.model.id, show_results_timer: this.model.get('resultsTimer')}, true, 'socket1');
      } else {
        this.send('emit', {next_question: nextQuestion.id, quiz_id: this.model.id, show_results_timer: this.model.get('resultsTimer')}, true, 'socket1');
      }
    }
  }
});
