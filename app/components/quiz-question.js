import Ember from 'ember';

export default Ember.Component.extend({
  game: Ember.inject.service(),

  didReceiveAttrs() {
    this._super(...arguments);

    // When we receive new parameters, we will reset our internal state (display mode and timer)
    this.set('selectable', true);
    this.resetTimer();
  },

  willDestroyElement() {
    this._super(...arguments);

    this.clearTimer();
  },

  resetTimer() {
    this.clearTimer();

    this.timeout = Ember.run.later(
      () => this.$('.answer').animate({opacity: '1'}, 500, 'linear'),
      2000
    );
  },

  clearTimer() {
    if (this.timeout) {
      Ember.run.cancel(this.timeout);
      this.timeout = null;
    }
  },

  actions: {
    selectAnswer(answer, player) {
      // Deactivate the player who selected the answer, so that they cannot select another answer...
      player.set('active', false);

      // TODO: Store user answer

      // If we still have players left that did not select an answer yet, we will keep waiting for their input.
      // Otherwise, we will switch to the results mode.
      this.set(
        'selectable',
        this.get('game.activePlayers.length') > 0
      );
    },

    timeUp() {
      // When time is up, we will stop accepting input from all the quiz participants
      this.get('game.activePlayers').forEach(
        player => player.set('active', false)
      );

      // ...and finally switch to the results view
      this.set('selectable', false);
    }
  }
});
