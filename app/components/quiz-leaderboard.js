import Ember from "ember";

export default Ember.Component.extend(Ember.SortableMixin, {
  sortProperties:  ['points'],
  sortAscending: false,
  actions: {
    sortPoints: function(){
      // sort by age
      this.set('sortProperties', ['points']);
    },
    sortName: function(){
      // sort by name
      this.set('sortProperties', ['name']);
    }
  },
  animate: function() {
    var self = this;
    console.log(this.$('.animate'));
    this.$('.animate').each(function(){
      console.log(self.$(this).data("animatetarget")+'px');
    self.$(this).css('margin-top', self.$(this).data("animatetarget")+'px');
    });
   }.on('didInsertElement')

});
