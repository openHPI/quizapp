import DS from 'ember-data';

const Quiz = DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  questions: DS.hasMany('question', { async: true }),
  languague: DS.attr('string'),
  status: DS.attr('string'),
  points: DS.attr('integer', { defaultValue: 0 }),
  participants: DS.hasMany('user', { async: true }),
  current_position: DS.attr('integer', { defaultValue: 0 }),
  ready: DS.attr('boolean', {defaultValue: false}),
  resultsTimer: DS.attr('integer', {defaultValue: 5}),

  getNextQuestion() {
    if (this.get('current_position') === this.get('questions.length')) {
      return false;
    } else {
      this.set('current_position', this.get('current_position') + 1);
      return this.get('questions').objectAt(this.get('current_position'));
    }
  },
  reset() {
    this.set('points', 0);
    this.set('current_position', 0);
    this.get('questions').then(questions => {
      questions.forEach(question => question.reset());
    });
  },
  removeAllParticipants() {
    const participants = this.get('participants');

    participants.removeObjects(participants.toArray());
  },
  removeParticipant(participant) {
    this.get('participants').removeObjects(participant.toArray());
  }
});

export default Quiz;
