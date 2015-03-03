import Ember from 'ember';
export default Ember.Route.extend({
  model: function(params) {
    console.log('QUIZ SHOW');
    console.log(params);
    return this.store.find('quiz', this.get('quiz_id'));
  },
  setupController: function(controller, model) {
    controller.set('model', model);
  }
});
