import Ember from "ember";

export default Ember.Component.extend({
  didInsertElement() {
    setTimeout(() => this.$('.answer').animate({opacity: '1'}, 500, 'linear'), 3000);
  },

  actions: {
    selectAnswer(answer_id, question_id) {
      this.sendAction('action', answer_id, question_id);
    }
  }
});
