import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('quiz', {path: "/quiz"}, function() {
    this.route('show', {path: "/:quiz_id"});
  });
});
export default Router;
