import DS from 'ember-data';
export default DS.Model.extend({
  title: DS.attr('string'),
  quiz: DS.belongsTo('quiz'),
  answers: DS.hasMany('answer')
});
