import Ember from 'ember';

export default Ember.Component.extend({
  timeout: null,

  didInsertElement() {
    this.timeout = setTimeout(
      () => this.$('.answer').animate({opacity: '1'}, 500, 'linear'),
      2000
    );
  },

  willDestroyElement() {
    clearTimeout(this.timeout);
  },

  actions: {
    selectAnswer() {
      this.sendAction('action', ...arguments);
    }
  }
});
