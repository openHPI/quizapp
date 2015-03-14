import DS from 'ember-data';

var Question = DS.Model.extend({
  title: DS.attr('string'),
  quiz: DS.belongsTo('quiz'),
  answers: DS.hasMany('answer', {async: true}),
  timer: DS.attr('integer', {defaultValue: 15}),

  reset: function() {
    this.get('answers').then( function(answers) {
      for (var i = 0; i < answers.get('length'); i++) {
        answers.objectAt(i).reset();
      }
    });
  },
  updateSelectionCount: function(question_answers) {
    if (question_answers) {
      var participants = this.get('quiz').get('participants').get('length');
      this.get('answers').then( function(answers) {
        for (var i = 0; i < answers.get('length'); i++) {
          var answer = answers.objectAt(i);
          if (question_answers[answer.id]) {
            answer.set('selectionCount', question_answers[answer.id]);
            answer.set('selectionPercentage', question_answers[answer.id]/participants * 100);
          }
        }
      });
    }
  }
});

Question.reopenClass({
  FIXTURES: [
    { id: 1, quiz_id: 1, title: 'Which order of magnitude fits best for describing how many Internet users there are today?', answers: [1, 2, 3, 4] },
    { id: 2, quiz_id: 1, title: 'Which layer of the TCP/IP stack performs this task: Providing logical addresses for communication peers', answers: [5, 6, 7, 8] },
    { id: 3, quiz_id: 1, title: 'Which of the following measure increases the security of a web browser?', answers: [9, 10, 11, 12] },
    { id: 4, quiz_id: 1, title: 'Order the following network classifications in increasing size.', answers: [13, 14, 15, 16] },
    { id: 5, quiz_id: 1, title: 'Which of the following configuration options for WLANs make them (adequately) secure?', answers: [17, 18, 19, 20] },
    { id: 6, quiz_id: 1, title: 'What is the output of the method "range(10)" in the programming language python?', answers: [21, 22, 23, 24] },
    { id: 7, quiz_id: 1, title: 'Punchcards were the early predecessors of enterprise data management systems. What basic operations were already supported by punchcards?', answers: [25, 26, 27, 28] },
    { id: 8, quiz_id: 1, title: 'Translate the information "John likes football." into RDF and match the parts to subject, property, and object.', answers: [29, 30, 31, 32] },
    { id: 9, quiz_id: 1, title: 'In semantic web technologies a formula is satisfiable if ...', answers: [33, 34, 35, 36] },
    { id: 10, quiz_id: 1, title: 'What describes a problem of the traditional WWW?', answers: [37, 38, 39, 40] },
  ]
});

export default Question;
