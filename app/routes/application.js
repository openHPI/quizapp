import Ember from 'ember';
import socketMixin from 'ember-websockets/mixins/sockets';

export default Ember.Route.extend(socketMixin, {
  socketConfigurations: [{
    key: 'socket1',
    socketURL: 'ws://openhpi-quizapp-server.herokuapp.com:8080',
    keepSocketAlive: true
	}],
});
