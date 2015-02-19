import DS from 'ember-data';

var Quiz = DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean'),
  questions: DS.hasMany('question'),
  languague: DS.attr('string')
});

Quiz.reopenClass({
  FIXTURES: [
    { id: 1, title: 'Quiz A', isCompleted: true },
    { id: 2, title: 'Quiz B' }
  ]
});

export default Quiz;
