import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    setTimeout(
      () => this.$('.answer').animate({opacity: '1'}, 500, 'linear'),
      3000
    );
  },

  answers: Ember.computed('question.answers', function() {
    return this.get('question.answers').map((answer, index) => ({
      text: answer.get('title'),
      color: ['yellow', 'green', 'red', 'blue'][index],
      userKeys: {
        'user1': ['ArrowUp', 'ArrowLeft', 'ArrowDown', 'ArrowRight'][index],
        'user2': ['KeyW', 'KeyA', 'KeyS', 'KeyD'][index]
      },
      model: answer
    }));
  }),

  actions: {
    selectAnswer() {
      this.sendAction('action', ...arguments);
    }
  }
});
