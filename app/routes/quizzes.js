import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default Route.extend({
  game: inject(),

  model() {
    return this.store.peekAll('quiz');
  },

  afterModel() {
    this.get('game').reset();
  }
});
