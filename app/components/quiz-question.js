import Component from '@ember/component';
import { inject } from '@ember/service';
import { A } from '@ember/array';
import { cancel, later } from '@ember/runloop';
import { computed, observer } from '@ember/object';

export default Component.extend({
  classNames: ['quizQuestion'],

  game: inject(),

  init() {
    this._super(...arguments);

    this._queue = [];
    this.selectedAnswers = A();
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

    this.timeout = later(
      () => { /*this.$('.quizQuestion-answer').animate({opacity: '1'}, 500, 'linear')*/ },
      2000
    );
  },

  clearTimer() {
    if (this.timeout) {
      cancel(this.timeout);
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
  switchMode: observer('selectable', function() {
    if (this.get('selectable')) {
      this.set('selectedAnswers', A());
      return;
    }

    this._queue.forEach(callback => callback());
    this._queue = A();
  }),

  answers: computed('question.answers', 'selectedAnswers.@each', function() {
    return this.get('question.answers').map(answer => ({
      model: answer,
      selectedBy: this.get('selectedAnswers').filter(
        row => row.answer === answer
      ).map(
        row => row.player
      )
    }));
  }),

  actions: {
    selectAnswer(answer, player) {
      // Deactivate the player who selected the answer, so that they cannot select another answer...
      player.set('active', false);

      // Let's store the player's answer, so that it can be displayed later
      player.rememberAnswer(answer);

      this.get('selectedAnswers').pushObject({
        player: player.get('number'),
        answer: answer
      });

      // The player that answers the question correctly first receives 15 points. All other players
      // receive only 10 points for a correct answer.
      // We queue these operations here, so that the points are only awarded once all players have
      // made their choice.
      if (answer.get('correct')) {
        player.correctAnswer();

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
