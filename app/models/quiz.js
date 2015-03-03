import DS from 'ember-data';

var Quiz = DS.Model.extend({
  title: DS.attr('string'),
  questions: DS.hasMany('question', { async: true }),
  languague: DS.attr('string'),
  points: DS.attr('integer', { defaultValue: 0 }),

  updatePoints: function(p) {
    console.log('Grant Points');
		if (p) {
			this.set('points', this.get('points') + p);
		} else {
  		this.set('points', this.get('points') + 1);
		}   
  }
});

Quiz.reopenClass({
  FIXTURES: [
    { id: 1, title: 'Quiz A', questions: [1, 2, 3], user: [1] },
    { id: 2, title: 'Quiz B', questions: [4, 5, 6] },
  ]
});

export default Quiz;
