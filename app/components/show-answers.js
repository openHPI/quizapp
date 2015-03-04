import Ember from "ember";

export default Ember.Component.extend({
  actions: {
    selectAnswer: function(answer_id, question_id) {
    	this.sendAction('action', answer_id, question_id);
  }
}
});
