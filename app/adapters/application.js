import Ember from 'ember';
import FixtureAdapter from 'ember-data-fixture-adapter';

export default FixtureAdapter.extend({
  plurals: {
    'quiz':'quizzes'
  },
  queryFixtures: function(fixtures, query) {
    var key = Ember.keys(query)[0];
    return fixtures.filterBy(key, query[key]);
  }
});
