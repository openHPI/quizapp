import Ember from 'ember';

export default Ember.Route.extend({
  model: function(param, transition) {
    return this.store.find('quiz', transition.params.quiz.quiz_id);
  },
  setupController: function(controller, model) {
    controller.set('model', model);
  }
});
