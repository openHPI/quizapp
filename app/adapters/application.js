import FixtureAdapter from 'ember-data-fixture-adapter';

export default FixtureAdapter.extend({
  plurals: Object.freeze({
    'quiz':'quizzes'
  })
});
