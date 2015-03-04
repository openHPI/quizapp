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
    { id: 13, question_id: 4, title: 'A', correct: true },
    { id: 14, question_id: 4, title: 'b', correct: false },
    { id: 15, question_id: 4, title: 'c', correct: false },
    { id: 16, question_id: 4, title: 'd', correct: false },
    { id: 17, question_id: 5, title: 'e', correct: false },
    { id: 18, question_id: 5, title: 'F', correct: true },
    { id: 19, question_id: 5, title: 'g', correct: false },
    { id: 20, question_id: 5, title: 'h', correct: false },
    { id: 21, question_id: 6, title: 'i', correct: false },
    { id: 22, question_id: 6, title: 'j', correct: false },
    { id: 23, question_id: 6, title: 'K', correct: true },
    { id: 24, question_id: 6, title: 'l', correct: false },
  ]
});

export default Answer;
