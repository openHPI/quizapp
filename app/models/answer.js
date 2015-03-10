import DS from 'ember-data';

var Answer = DS.Model.extend({
  title: DS.attr('string'),
  question: DS.belongsTo('question'),
  correct: DS.attr('boolean'),
});

Answer.reopenClass({
  FIXTURES: [
    // Question: Which order of magnitude fits best for describing how many Internet users there are today?
    { id: 1, question_id: 1, title: 'hundred of thousands', correct: false },
    { id: 2, question_id: 1, title: 'millions', correct: false },
    { id: 3, question_id: 1, title: 'hundred of millions', correct: false },
    { id: 4, question_id: 1, title: 'billions', correct: true },
    { id: 5, question_id: 1, title: 'hundred of billions', correct: false },

    // Question: Which layer of the TCP/IP stack performs this task: Providing logical addresses for communication peers
    { id: 6, question_id: 2, title: 'Application layer', correct: false },
    { id: 7, question_id: 2, title: 'Hardware layer', correct: false },
    { id: 8, question_id: 2, title: 'Internet layer', correct: true },
    { id: 9, question_id: 2, title: 'Link layer', correct: false },
    { id: 10, question_id: 2, title: 'Transport layer', correct: false },

    // Question: Which of the following measure increases the security of a web browser?
    { id: 11, question_id: 3, title: 'Sandboxing', correct: true },
    { id: 12, question_id: 3, title: 'Skydiving', correct: false },
    { id: 13, question_id: 3, title: 'Web Surfing', correct: false },
    { id: 14, question_id: 3, title: 'Cross-Site Scripting', correct: false },
    { id: 15, question_id: 3, title: 'Click Hijacking', correct: false },

    // Question: Which of the following weak points are the most frequently (top 3) on the web?
    { id: 16, question_id: 4, title: 'Cross-Site Request Forgery', correct: false },
    { id: 17, question_id: 4, title: 'Cross-Site Scripting', correct: true },
    { id: 18, question_id: 4, title: 'Code Injection', correct: true },
    { id: 19, question_id: 4, title: 'Information Disclosure (disclosure of sensitive data)', correct: false },
  ]
});

export default Answer;
