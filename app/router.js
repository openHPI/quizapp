import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('quizzes');
  this.resource('quiz', {path: "/quiz/:quiz_id/"}, function() {
    this.route('show');
    this.route('waiting');
    this.route('stats');
    this.resource('question', {path: "/question/:question_id/"}, function() {
      //
    });
  });
});
export default Router;
