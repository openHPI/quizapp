import Ember from 'ember';

export default Ember.Route.extend({
  model(param, transition) {
    return this.store.find('quiz', transition.params.quiz.quiz_id);
  }
});
