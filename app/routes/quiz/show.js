import Ember from 'ember';
export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('quiz', params.quiz_id);
  },
  setupController: function(controller, model) {
    controller.set('model', model);   
  }
});
