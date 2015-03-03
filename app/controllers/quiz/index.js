import Ember from "ember";
//import DS from 'ember-data';

export default Ember.ObjectController.extend({
  points: 0,

  actions: {
    start: function() {
      console.log('Start - Get first quiz question');
      var self = this;
      this.model.get("questions").then( function(questions) {                        
        self.transitionToRoute('question', questions.objectAt(0));
      });      
    }      
  }
});
