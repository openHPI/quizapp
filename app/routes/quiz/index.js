import Ember from 'ember';

export default Ember.Route.extend({
  model(params, transition) {
    return this.store.findRecord('quiz', transition.params.quiz.quiz_id);
  }
});
