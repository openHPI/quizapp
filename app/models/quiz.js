import DS from 'ember-data';

var Quiz = DS.Model.extend({
  title: DS.attr('string'),
  questions: DS.hasMany('question'),
  users: DS.hasMany('user'),
  languague: DS.attr('string')
});

Quiz.reopenClass({
  FIXTURES: [
    { id: 1, title: 'Quiz A', questions: [1, 2, 3], user: [1] },
    { id: 2, title: 'Quiz B', questions: [4, 5, 6] },
  ]
});

export default Quiz;
