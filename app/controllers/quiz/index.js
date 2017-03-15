import Ember from 'ember';

export default Ember.Controller.extend({
  game: Ember.inject.service(),

  idlePlayers: Ember.computed.alias('game.idlePlayers'),

  startGame() {
    this.model.reset();

    const firstQuestion = this.model.get('questions').objectAt(0);
    this.transitionToRoute('quiz.question', this.model, firstQuestion);
  },

  actions: {
    joinAndStart(player) {
      player.set('joined', true);
      this.startGame();
    },
    start() {
      this.startGame();
    }
  }
});
