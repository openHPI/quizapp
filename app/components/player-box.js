import Component from '@ember/component';
import { inject } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: ['playerBox'],

  game: inject(),

  instructionText: computed('player.{joined,active}', 'game.{hasStarted,hasPlayers}', function() {
    if (this.get('player.joined')) {
      if (! this.get('game.hasStarted')) {
        return 'Bitte warte auf andere Mitspieler.';
      }

      if (this.get('player.active')) {
        return 'Drücke den passenden Buzzer zur richtigen Antwort.';
      }

      return 'Bitte warten.';
    } else {
      if (this.get('game.hasStarted')) {
        return 'Bitte warte auf deinen Mitspieler.';
      }

      if (this.get('game.hasPlayers')) {
        return 'Drücke den gelben Buzzer, um mitzuspielen.';
      }

      return 'Drücke den gelben Buzzer, um ein neues Spiel zu beginnen!';
    }
  })
});
