import Ember from "ember";

export default Ember.Component.extend({
  didInsertElement() {
    this._super(...arguments);

    this.$('.bar').css("width", "100%");
    this.$('.bar').stop();
    this.$('.bar').animate({width: "0px"}, this.time*1000, 'linear', this.attrs.whenTimeUp);
  }
});
