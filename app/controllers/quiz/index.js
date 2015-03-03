import Ember from "ember";
//import DS from 'ember-data';

export default Ember.ObjectController.extend({
  points: 0,

  actions: {
    start: function() {
      console.log('Start - Get first quiz question');
      self = this;
      this.model.get("questions").then( function(questions) {                        
        self.transitionToRoute('question', questions.objectAt(0));
      });      
    },   
    grantPoints: function() {
      console.log('Points +1');
      return false;
    } 
  }
});
