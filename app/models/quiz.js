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
  },
  removeAllParticipants: function() {
    var participants = this.get('participants'),
        list = participants.toArray();
    participants.removeObjects(list);
  }
});

Quiz.reopenClass({
  FIXTURES: [
    { id: 1, title: 'Internet 101: TCP/IP and Security', description: "Basic knowledge about the Internet (eng.)", questions: [1, 2, 3, 4] },
    { id: 2, title: 'Teste Dein Wissen', description: "Internet Grundlagen und Datenbanken (de.)" },
    { id: 3, title: 'Quiz C', description: "TODO (cn.)", questions: [] },
  ]
});

export default Quiz;
