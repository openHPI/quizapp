import Ember from 'ember';
import FixtureAdapter from 'ember-data-fixture-adapter';

export default FixtureAdapter.extend({
  plurals: {
    'quiz':'quizzes'
  },
  queryFixtures: function(fixtures, query) {
    var key = Ember.keys(query)[0];
    return fixtures.filterBy(key, query[key]);
  },
  findRecord(store, typeClass, id) {
    return this.find(store, typeClass, id);
  },
  query(store, typeClass, query) {
    return this.findQuery(store, typeClass, query);
  }
});
