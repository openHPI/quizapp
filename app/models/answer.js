import DS from 'ember-data';

var Answer = DS.Model.extend({
  title: DS.attr('string'),
  question: DS.belongsTo('question'),
  correct: DS.attr('boolean'),
});

Answer.reopenClass({
  FIXTURES: [
    { id: 1, question_id: 1, title: '42', correct: true },
    { id: 2, question_id: 1, title: 'Peace, Love and Joy', correct: false },
    { id: 3, question_id: 1, title: '43', correct: false },
    { id: 4, question_id: 1, title: '44', correct: false },
    { id: 5, question_id: 2, title: 'God', correct: false },
    { id: 6, question_id: 2, title: 'Your Brain', correct: true },
    { id: 7, question_id: 2, title: 'The Pimpmaster', correct: false },
    { id: 8, question_id: 2, title: 'Santa', correct: false },
    { id: 9, question_id: 3, title: 'Fulfill the prophecy', correct: false },
    { id: 10, question_id: 3, title: 'Plant a tree', correct: false },
    { id: 11, question_id: 3, title: 'Doing that damm quiz', correct: true },
    { id: 12, question_id: 3, title: "I don't care", correct: false },
  ]
});

export default Answer;
