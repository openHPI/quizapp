import Ember from 'ember';

export default Ember.Route.extend({
  game: Ember.inject.service(),

  model() {
    return this.store.find('quiz', 300);
  },

  afterModel() {
    this.get('game').reset();
  }
});
