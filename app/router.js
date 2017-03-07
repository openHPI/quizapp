import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.resource('quizzes');
  this.resource('quiz', {path: "/quiz/:quiz_id/"}, function() {
    this.route('show');
    this.route('stats');
    this.resource('question', {path: "/question/:question_id/"}, function() {
      this.route('waiting');
      this.route('results');
    });
  });
});

export default Router;
