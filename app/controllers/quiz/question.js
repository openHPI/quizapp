import Ember from 'ember';

export default Ember.Controller.extend({
  game: Ember.inject.service(),

  waitingForAnswers: true,

  actions: {
    selectAnswer(answer, player) {
      console.log('selectAnswer', ...arguments);

      const question = answer.get('question');


      player.set('active', false);

      // TODO: Store user answer

      //if ()
      this.set(
        'waitingForAnswers',
        this.get('game.activePlayers.length') > 0
      );


      // if all answers given
      // show results
      // else
      // note answer, disable player, keep going

    },
    timeUp() {
      console.log('Time is up!');
      this.set('waitingForAnswers', false);
      //this.transitionToRoute('quiz.question.waiting', this.model.get('quiz'), this.model);
    }
  }
});
