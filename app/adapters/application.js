import DS from 'ember-data';

export default DS.FixtureAdapter.extend({
  plurals:{
    'quiz':'quizzes'
  }
});
