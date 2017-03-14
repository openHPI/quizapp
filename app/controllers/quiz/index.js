import Ember from 'ember';

export default Ember.Controller.extend({
  game: Ember.inject.service(),

  idlePlayers: Ember.computed.alias('game.idlePlayers'),

  startGame() {
    this.model.reset();

    // Activate all joined players for the first round!
    this.get('game.players').forEach(player => player.set('active', true));

    const firstQuestion = this.model.get('questions').objectAt(0);
    this.transitionToRoute('quiz.question', this.model, firstQuestion);
  },

  actions: {
    joinAndStart(player) {
      console.log('Player ', player, 'also joined the game!');
      player.set('joined', true);
      this.startGame();
    },
    start() {
      this.startGame();
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
