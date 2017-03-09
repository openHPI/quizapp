import Ember from 'ember';

export default Ember.Route.extend({
  model(param, transition) {
    return this.store.find('question', transition.params.question.question_id);
  },
  setupController(controller, model) {
    model.set('submitted', false);
    controller.set('model', model);
  }
});
