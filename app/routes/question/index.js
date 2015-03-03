import Ember from 'ember';
export default Ember.Route.extend({
  model: function(params) {
    console.log('Question SHOW');
    console.log(params);
    return this.store.find('question', 1);
  },
  setupController: function(controller, model) {
    controller.set('model', model);
  }
});
