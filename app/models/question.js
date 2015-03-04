import DS from 'ember-data';

var Question = DS.Model.extend({
  title: DS.attr('string'),
  quiz: DS.belongsTo('quiz'),
  answers: DS.hasMany('answer', {async: true}),
  submitted: DS.attr('boolean', {defaultValue: false}),
  timer: DS.attr('integer'), 
});

Question.reopenClass({
  FIXTURES: [
    { id: 1, quiz_id: 1, title: 'What is the answer of everything?', answers: [1, 2, 3, 4] },
    { id: 2, quiz_id: 1, title: 'Who are you?', answers: [5, 6, 7, 8] },
    { id: 3, quiz_id: 1, title: 'Why are we here?', answers: [9, 10, 11, 12] },
    { id: 4, quiz_id: 2, title: 'What are security issues in the internet?' },
    { id: 5, quiz_id: 2, title: 'Why was security not a big topic when the internet was created?' },
    { id: 6, quiz_id: 2, title: 'What are possible security attacks?' },
  ]
});

export default Question;
