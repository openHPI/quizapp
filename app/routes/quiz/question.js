import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default Route.extend({
  game: inject(),

  model(params) {
    return this.store.peekRecord('question', params.question_id);
  },

  afterModel() {
    this.get('game').activateJoinedPlayers();
  }
});
