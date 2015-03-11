import Ember from "ember";

export default Ember.Component.extend({
  addCssClass: function() {
  	setTimeout( function() {
    	this.$('.answer').animate({opacity: "1"}, 500, 'linear');
  	}, 3000);
   }.on('didInsertElement'),

  actions: {
    selectAnswer: function(answer_id, question_id) {
    	this.sendAction('action', answer_id, question_id);
  }
}
});
