import Ember from 'ember';

export default Ember.Route.extend({
  game: Ember.inject.service(),

  model(params) {
    return this.store.find('question', params.question_id);
  },

  afterModel() {
    this.get('game').activateJoinedPlayers();
  }
});
