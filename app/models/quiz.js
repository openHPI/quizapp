import DS from 'ember-data';

var Quiz = DS.Model.extend({
  title: DS.attr('string'),
<<<<<<< HEAD
  questions: DS.hasMany('question'),
  users: DS.hasMany('user'),
=======
  questions: DS.hasMany('question', { async: true }),
>>>>>>> 602d3977782ab089e26f9f8b778fbdbcb1cc22bd
  languague: DS.attr('string')
});

Quiz.reopenClass({
  FIXTURES: [
    { id: 1, title: 'Quiz A', questions: [1, 2, 3], user: [1] },
    { id: 2, title: 'Quiz B', questions: [4, 5, 6] },
  ]
});

export default Quiz;
