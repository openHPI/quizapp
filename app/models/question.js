import DS from 'ember-data';

var Question = DS.Model.extend({
  title: DS.attr('string'),
  quiz: DS.belongsTo('quiz'),
  answers: DS.hasMany('answer', {async: true}),
  timer: DS.attr('integer', {defaultValue: 15}),
  relativeId: DS.attr('integer'),

  reset: function() {
    this.get('answers').then( function(answers) {
      for (var i = 0; i < answers.get('length'); i++) {
        answers.objectAt(i).reset();
      }
    });
  },
  updateSelectionCount: function(question_answers) {
    if (question_answers !== null) {
      var participants = this.get('quiz').get('participants').get('length');
      this.get('answers').then( function(answers) {
        for (var i = 0; i < answers.get('length'); i++) {
          var answer = answers.objectAt(i);
          answer.set('selectionCount', question_answers[answer.id]);
          answer.set('selectionPercentage', question_answers[answer.id]/participants * 100);
        }
      });
    }
  },
});

Question.reopenClass({
  FIXTURES: [
    // Advanced Quiz

    { id: 1, relativeId: 1, quiz_id: 1, title: 'Which order of magnitude fits best for describing how many Internet users there are today?', answers: [1, 2, 3, 4] },
    { id: 2, relativeId: 2, quiz_id: 1, title: 'Which layer of the TCP/IP stack performs this task: Providing logical addresses for communication peers', answers: [5, 6, 7, 8] },
    { id: 3, relativeId: 3, quiz_id: 1, title: 'Which of the following measure increases the security of a web browser?', answers: [9, 10, 11, 12] },
    { id: 4, relativeId: 4, quiz_id: 1, title: 'Order the following network classifications in increasing size.', answers: [13, 14, 15, 16] },
    { id: 5, relativeId: 5, quiz_id: 1, title: 'Which of the following configuration options for WLANs make them (adequately) secure?', answers: [17, 18, 19, 20] },
    { id: 6, relativeId: 6, quiz_id: 1, title: 'What is the output of the method "range(10)" in the programming language python?', answers: [21, 22, 23, 24] },
    { id: 7, relativeId: 7, quiz_id: 1, title: 'Punchcards were the early predecessors of enterprise data management systems. What basic operations were already supported by punchcards?', answers: [25, 26, 27, 28] },
    { id: 8, relativeId: 8, quiz_id: 1, title: 'Translate the information "John likes football." into RDF and match the parts to subject, property, and object.', answers: [29, 30, 31, 32] },
    { id: 9, relativeId: 9, quiz_id: 1, title: 'In semantic web technologies a formula is satisfiable if ...', answers: [33, 34, 35, 36] },
    { id: 10, relativeId: 10, quiz_id: 1, title: 'What describes a problem of the traditional WWW?', answers: [37, 38, 39, 40] },

    // Beginner Quiz
    { id: 11, relativeId: 1, quiz_id: 2, title: 'What is the internet?', answers: [41, 42, 43, 44],  },
    { id: 12, relativeId: 2, quiz_id: 2, title: 'Who is Inventor of the WWW, the World Wide Web?', answers: [45, 46, 47, 48] },
    { id: 13, relativeId: 3, quiz_id: 2, title: 'What is a Browser?', answers: [49, 50, 51, 52] },
    { id: 14, relativeId: 4, quiz_id: 2, title: 'Which of the following is NOT a browser?', answers: [53, 54, 55, 56] },
    { id: 15, relativeId: 5, quiz_id: 2, title: 'Which of the following is the oldest computer company?', answers: [57, 58, 59, 60] },
    { id: 16, relativeId: 6, quiz_id: 2, title: 'What is an URL?', answers: [61, 62, 63, 64] },

    // HPI Cebit Quiz
    { id: 21, relativeId: 1, quiz_id: 3, title: 'Was ist ein MOOC?', answers: [101, 102, 103, 104] },
    { id: 22, relativeId: 2, quiz_id: 3, title: 'HPI steht für?', answers: [111, 112, 113, 114] },
    { id: 23, relativeId: 3, quiz_id: 3, title: 'Welche Sportart analysiert das Team am HPI Stand?', answers: [121, 122, 123, 124] },
    { id: 24, relativeId: 4, quiz_id: 3, title: 'Was findet der Identity Leak Checker?', answers: [131, 132, 133, 134] },

  ]
});

export default Question;
