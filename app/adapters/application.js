import Ember from 'ember';
import FixtureAdapter from 'ember-data-fixture-adapter';

export default FixtureAdapter.extend({
  plurals: {
    'quiz':'quizzes'
  }
});
