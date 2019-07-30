import DS from 'ember-data';

const Answer = DS.Model.extend({
  title: DS.attr('string'),
  question: DS.belongsTo('question'),
  correct: DS.attr('boolean'),
  selected: DS.attr('boolean', {defaultValue: false}),
  selection_count: DS.attr('number', {defaultValue: 0}),
  selection_percentage: DS.attr('number', {defaultValue: 0}),

  reset() {
    this.set('selection_count', 0);
    this.set('selection_percentage', 0);
    this.set('selected', false);
  }
});

export default Answer;
