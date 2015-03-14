import Ember from "ember";

export default Ember.Component.extend({
  _register: function() {
    this.set('register-as', this);
  }.on('init'),
  renderElement: function() {
  	var self = this;
    this.$('.bar').css("width", "100%");
    this.$('.bar').stop();
    this.$('.bar').animate({width: "0px"}, this.time*1000, 'linear', function() {
    	self.sendAction('action');
  	});
   }.on('didInsertElement')

});
