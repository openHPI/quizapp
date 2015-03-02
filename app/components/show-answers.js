import Ember from "ember";

export default Ember.Component.extend({
  actions: {
    selectAnswer: function(id) {
    	this.sendAction('action', id);
  }
}
});