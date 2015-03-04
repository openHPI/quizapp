import Ember from "ember";

export default Ember.Component.extend(Ember.SortableMixin, {
  sortProperties:  ['points:DESC'],
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
