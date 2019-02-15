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
  },
  enoughParticipants: function() {
    this.set(
      'ready',
      this.get('participants').get('length') >= 2
    );
  }.observes('participants')
});

Quiz.reopenClass({
  FIXTURES: [
    //{ id: 1, title: 'openHPI Advanced Quiz (EN)', description: "A best-of collection of questions from past openHPI courses", questions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
    //{ id: 2, title: 'openHPI Beginners Quiz (EN)', description: "Good questions to prove your basic knowledge about the internet", questions: [11, 12, 13, 14, 15, 16] },
    //{ id: 300, title: 'Das Schul-Cloud-Quiz (DE)', description: 'Wie gut kennt ihr die Schul-Cloud?', questions: [301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311] },
    { id: 201901, title: 'Digitale Identitäten', description: 'Wer bin ich im Netz?', questions: [301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311] },
    { id: 201902, title: 'ESP32', description: 'Wie programmiere ich meinen ersten Mini-Computer?', questions: [11, 12, 13, 14, 15, 16] },
    { id: 201903, title: 'Blockchain', description: 'Sicherheit auch ohne Trust Center', questions: [11, 12, 13, 14, 15, 16] },
    { id: 201904, title: 'openHPI', description: "", questions: [1] },

    //{ id: 100, title: 'Internet und Soziale Medien - Basics (DE)', description: "Einfache Fragen zum Thema Internet", questions: [101, 102, 103, 104, 105, 106, 107, 108, 109, 110] },
    //{ id: 200, title: 'Internet und Soziale Medien - Advanced (DE)', description: "Schwierigere Fragen zum Thema Internet", questions: [201, 202, 203, 204, 205, 206, 207, 208, 209, 210] },
    { id: 201905, title: 'HPI Schul-Cloud', description: "", questions: [1] },
    { id: 201906, title: 'Hasso-Plattner-Institut', description: "Studieren am HPI", questions: [21, 22, 23, 24, 25, 26, 27, 28] },
    { id: 201907, title: 'Test', description: "Fragen über Fragen ...", questions: [1] },
    //{ id: 500, title: 'The HPI Quiz', description: 'Test your knowledge about the Hasso Plattner Institute', questions: [501, 502, 503, 504, 505, 506, 507, 508, 509, 510] },
  ]
});

export default Quiz;
