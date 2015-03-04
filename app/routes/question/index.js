import Ember from 'ember';

export default Ember.Route.extend({
  model: function(param, transition) {
    return this.store.find('question', transition.params.question.question_id);
  },
  setupController: function(controller, model) {
    model.set('submitted', false);
    controller.set('model', model);
  }
});
