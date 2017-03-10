import Ember from 'ember';
import DS from 'ember-data';

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

  answers: Ember.computed('question.answers', function() {
    return DS.PromiseArray.create({
      promise: this.get('question.answers').then(
        answers => answers.map((answer, index) => ({
          text: answer.get('title'),
          color: ['yellow', 'green', 'red', 'blue'][index],
          model: answer
        }))
      )
    });
  }),

  actions: {
    selectAnswer() {
      this.sendAction('action', ...arguments);
    }
  }
});
