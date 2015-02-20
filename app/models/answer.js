import DS from 'ember-data';

var Answer = DS.Model.extend({
  title: DS.attr('string'),
  question: DS.belongsTo('question')
});

Answer.reopenClass({
  FIXTURES: [
    { id: 1, question_id: 1, title: '42' },
    { id: 2, question_id: 1, title: 'Peace, Love and Joy' },
    { id: 3, question_id: 1, title: '43' },
    { id: 4, question_id: 1, title: '44' },
    { id: 5, question_id: 2, title: 'God' },
    { id: 6, question_id: 2, title: 'Your Brain' },
    { id: 7, question_id: 2, title: 'The Pimpmaster' },
    { id: 8, question_id: 2, title: 'Santa' },
    { id: 9, question_id: 3, title: 'Fulfill the prophecy' },
    { id: 10, question_id: 3, title: 'Plant a tree' },
    { id: 11, question_id: 3, title: 'Doing that damm quiz' },
    { id: 12, question_id: 3, title: "I don't care" },
  ]
});

export default Answer;
