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

export default User;
