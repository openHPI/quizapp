import Ember from 'ember';

export default Ember.Component.extend({
  timeout: null,

  didInsertElement() {
    this._super(...arguments);

    this.timeout = setTimeout(
      () => this.executeHandler(),
      this.get('seconds') * 1000
    );
  },

  willDestroyElement() {
    this._super(...arguments);

    clearTimeout(this.timeout);
  },

  executeHandler() {
    this.sendAction();
  }
});
