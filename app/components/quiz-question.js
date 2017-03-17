import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['quizQuestion'],

  game: Ember.inject.service(),

  init() {
    this._super(...arguments);

    this._queue = [];
  },

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
      () => this.$('.quizQuestion-answer').animate({opacity: '1'}, 500, 'linear'),
      2000
    );
  },

  clearTimer() {
    if (this.timeout) {
      Ember.run.cancel(this.timeout);
      this.timeout = null;
    }
  },

  queue(callback) {
    this._queue.push(callback);
  },

  queueIsEmpty() {
    return this._queue.length === 0;
  },

  // Once the answers are no longer selectable, we run all queued operations, which mostly
  // means that points will be awarded to the players.
  flushQueue: Ember.observer('selectable', function() {
    if (this.get('selectable')) {
      return;
    }

    this._queue.forEach(callback => callback());
    this._queue = [];
  }),

  actions: {
    selectAnswer(answer, player) {
      // Deactivate the player who selected the answer, so that they cannot select another answer...
      player.set('active', false);

      // Let's store the player's answer, so that it can be displayed later
      player.rememberAnswer(answer);

      // The player that answers the question correctly first receives 15 points. All other players
      // receive only 10 points for a correct answer.
      // We queue these operations here, so that the points are only awarded once all players have
      // made their choice.
      if (answer.get('correct')) {
        if (this.queueIsEmpty()) {
          this.queue(() => player.receivePoints(15));
        } else {
          this.queue(() => player.receivePoints(10));
        }
      }

      // If we still have players left that did not select an answer yet, we will keep waiting for their input.
      // Otherwise, we will switch to the results mode.
      this.set(
        'selectable',
        this.get('game').hasThinkingPlayers()
      );
    },

    timeUp() {
      // When time is up, we will stop accepting input from all the quiz participants
      this.get('game').deactivateAllPlayers();

      // ...and finally switch to the results view
      this.set('selectable', false);
    }
  }
});
