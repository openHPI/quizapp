import Ember from 'ember';

export default Ember.Route.extend({
  game: Ember.inject.service(),

  model() {
    return this.store.findAll('quiz');
  },

  afterModel() {
    this.get('game').reset();
  }
});
