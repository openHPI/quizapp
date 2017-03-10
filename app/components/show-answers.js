import Ember from 'ember';

export default Ember.Component.extend({
  timeout: null,

  didInsertElement() {
    this.timeout = setTimeout(
      () => this.$('.answer').animate({opacity: '1'}, 500, 'linear'),
      3000
    );
  },

  willDestroyElement() {
    clearTimeout(this.timeout);
  },

  answers: Ember.computed.alias('question.answers'),

  actions: {
    selectAnswer() {
      this.sendAction('action', ...arguments);
    }
  }
});
