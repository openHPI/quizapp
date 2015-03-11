import Ember from "ember";

export default Ember.Component.extend({
  _register: function() {
    this.set('register-as', this);
  }.on('init'),
  renderElement: function() {
    this.$('.bar').css("width", "100%");
    this.$('.bar').stop();
    this.$('.bar').animate({width: "0px"}, this.time*1000, 'linear');
   }.on('didInsertElement')
});
