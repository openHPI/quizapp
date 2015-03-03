import Ember from "ember";

export default Ember.Controller.extend({  
  actions: {
    // Websocket actions
    onopen: function(socketEvent) {
      console.log('On open has been called!');
      console.log(socketEvent);
    },
    onmessage: function(socketEvent) {
      console.log('On message has been called!');
      console.log(socketEvent);
      
      if (!isNaN(socketEvent.data)) {
        var question_id = Number(socketEvent.data);
        this.transitionToRoute('question', question_id);
      }
    },
    onclose: function(socketEvent) {
      console.log('On close has been called!');
      console.log(socketEvent);
    },
    onerror: function(socketEvent) {
      console.log('On error has been called! :-(');
      console.log(socketEvent);
    }      
  }
});
