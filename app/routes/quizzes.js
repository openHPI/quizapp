import Ember from 'ember';

export default Ember.Route.extend({
  game: Ember.inject.service(),

  model() {
    return this.store.findAll('quiz');
  },

  afterModel() {
    this.get('game.players').forEach(
      player => player.setProperties({active: false, joined: false})
    );
  }
});
