import Ember from "ember";

export default Ember.Component.extend({
  renderElement: function() {

    this.$('.bar').animate({width: "0px"}, 10000, 'linear');

   }.on('didInsertElement')
});
