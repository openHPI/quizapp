import DS from 'ember-data';

const Question = DS.Model.extend({
  title: DS.attr('string'),
  quiz: DS.belongsTo('quiz'),
  answers: DS.hasMany('answer', {async: true}),
  timer: DS.attr('number', {defaultValue: 20}),
  relativeId: DS.attr('number'),

  reset() {
    this.get('answers').then(answers => {
      answers.forEach(answer => answer.reset());
    });
  },

  updateSelectionCount(questionAnswers) {
    if (questionAnswers === null) {
      return;
    }

    const numParticipants = this.get('quiz.participants.length');
    this.get('answers').then(answers => {
      answers.forEach(answer => {
        answer.set('selectionCount', questionAnswers[answer.id]);
        answer.set('selectionPercentage', (questionAnswers[answer.id] / numParticipants) * 100);
      });
    });
  }
});

export default Question;
