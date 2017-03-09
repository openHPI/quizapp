import Ember from 'ember';
import $ from 'jquery';

export default Ember.Component.extend({
  didInsertElement() {
    this._super(...arguments);

    this.$('.animate').each(function(index, element ){
      //note: do not use .data
      $( element ).css('margin-top', $( element ).attr("data-anim")*70+'px');
    });
    //todo: we need an element that is fired on every change
  },

  sortOrder: ['points:desc'],
  arrangedContent: Ember.computed.sort('content', 'sortOrder')
});
