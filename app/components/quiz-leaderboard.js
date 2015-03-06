import Ember from "ember";
import $ from 'jquery';
export default Ember.Component.extend(Ember.SortableMixin, {
  sortProperties:  ['points'],
  sortAscending: false,
  animate: function() {
      this.$('.animate').each(function(index, element ){
        //note: do not use .data
        $( element ).css('margin-top', $( element ).attr("data-anim")*70+'px');
      });
      //todo: we need an element that is fired on every change
   }.on('didInsertElement')

});
