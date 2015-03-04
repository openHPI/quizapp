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
      var data = JSON.parse(socketEvent.data);

      if (data.hasOwnProperty('new_question_id')) {
        var new_question_id = data["new_question_id"];
        this.transitionToRoute('question', new_question_id);
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
