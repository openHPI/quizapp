import DS from 'ember-data';

var Question = DS.Model.extend({
  title: DS.attr('string'),
  quiz: DS.belongsTo('quiz'),
  answers: DS.hasMany('answer', {async: true}),
  submitted: DS.attr('boolean', {defaultValue: false}),
  timer: DS.attr('integer', {defaultValue: 15}),
});

Question.reopenClass({
  FIXTURES: [
    { id: 1, quiz_id: 1, title: 'Which order of magnitude fits best for describing how many Internet users there are today?', answers: [1, 2, 3, 4] },
    { id: 2, quiz_id: 1, title: 'Which layer of the TCP/IP stack performs this task: Providing logical addresses for communication peers', answers: [5, 6, 7, 8] },
    { id: 3, quiz_id: 1, title: 'Which of the following measure increases the security of a web browser?', answers: [9, 10, 11, 12] },
    { id: 4, quiz_id: 1, title: 'Order the following network classifications in increasing size.', answers: [13, 14, 15, 16] },
  ]
});

export default Question;
