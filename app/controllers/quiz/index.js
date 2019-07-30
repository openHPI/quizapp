import Controller from '@ember/controller';
import { inject } from '@ember/service';
import { alias } from '@ember/object/computed';

export default Controller.extend({
  game: inject(),

  idlePlayers: alias('game.idlePlayers'),

  startGame() {
    this.model.reset();
    this.get('game').start();

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
