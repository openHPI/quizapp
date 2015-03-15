import DS from 'ember-data';

var Quiz = DS.Model.extend({
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

  getNextQuestion: function() {
    if (this.get('current_position') === this.get('questions').get('length')) {
      return false;
    } else {
      this.set('current_position', this.get('current_position') + 1);
      return this.get('questions').objectAt(this.get('current_position'));
    }
  },
  reset: function() {
    this.set('points', 0);
    this.set('current_position', 0);
    this.get('questions').then( function(questions) {
      for (var i = 0; i < questions.get('length'); i++) {
        questions.objectAt(i).reset();
      }
    });
  },
  removeAllParticipants: function() {
    var participants = this.get('participants'),
        list = participants.toArray();
    participants.removeObjects(list);
  },
  removeParticipant: function(participant) {
    var participants = this.get('participants'),
        participant_array = participant.toArray();
    participants.removeObjects(participant_array);
  },
  enoughParticipants: function() {
    if (this.get('participants').get('length') >= 2) {
      this.set('ready', true);
    } else {
      this.set('ready', false);
    }
  }.observes('participants'),

});

Quiz.reopenClass({
  FIXTURES: [
    { id: 1, title: 'openHPI Advanced Quiz (EN)', description: "A best of collection of questions from past openHPI courses.", questions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
    { id: 2, title: 'openHPI Beginners Quiz (EN)', description: "Good questions to prove your basic knowledge about the internet.", questions: [11, 12, 13, 14, 15, 16] },
    { id: 3, title: 'HPI@CeBIT Quiz (DE)', description: "Fragen über das HPI auf der CeBIT 2015", questions: [21, 22, 23, 24] },
  ]
});

export default Quiz;
