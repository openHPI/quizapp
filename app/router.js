import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('quizzes');
  this.route('quiz', { path: '/quizzes/:quiz_id' }, function() {
    this.route('show');
    this.route('stats');
    this.route('question', { path: '/questions/:question_id' }, function() {
      this.route('waiting');
      this.route('results');
    });
  });
});

export default Router;
