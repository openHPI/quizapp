import DS from 'ember-data';

var User = DS.Model.extend({
  name: DS.attr('string'),
  points: DS.attr('number', { defaultValue: 0 }),
});

User.reopenClass({
  FIXTURES: [
    { id: 1, name: 'Joe', points: 3 },
    { id: 2, name: 'Jane', points: 2 },
    { id: 3, name: 'Verena', points: 4 },
  ]
});

export default User;
