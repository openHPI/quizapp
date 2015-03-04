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
  }
});
