import DS from 'ember-data';

var Quiz = DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  questions: DS.hasMany('question', { async: true }),
  languague: DS.attr('string'),
  status: DS.attr('string'),
  points: DS.attr('integer', { defaultValue: 0 }),

  updatePoints: function(p) {
		if (p) {
			this.set('points', this.get('points') + p);
		} else {
  		this.set('points', this.get('points') + 1);
		}
  }
});

Quiz.reopenClass({
  FIXTURES: [
    { id: 1, title: 'Test your knowledge', description: "Basics knowledge about the Internet (eng.)", questions: [1, 2, 3] },
    { id: 2, title: 'Teste Dein Wissen', description: "Internet Grundlagen und Datenbanken (de.)", questions: [4, 5, 6] },
    { id: 3, title: 'Quiz C', description: "TODO (cn.)", questions: [] },
  ]
});

export default Quiz;
