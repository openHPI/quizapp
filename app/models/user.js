import DS from 'ember-data';

const User = DS.Model.extend({
  name: DS.attr('string'),
  points: DS.attr('number', { defaultValue: 0 }),
  within_quiz: DS.attr('boolean', { defaultValue: false }),
  is_tv: DS.attr('boolean', { defaultValue: false }),
  answered: DS.attr('boolean', { defaultValue: false }),

  updatePoints(p = 1) {
    this.set('points', this.get('points') + p);
  }
});

User.reopenClass({
  FIXTURES: [
    { id: 1, name: 'Joe', points: 3 },
    { id: 2, name: 'Jane', points: 2 },
    { id: 3, name: 'Verena', points: 4 },
  ]
});

export default User;
