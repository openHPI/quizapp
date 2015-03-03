import Ember from 'ember';
import socketMixin from 'ember-websockets/mixins/sockets';

export default Ember.Route.extend(socketMixin, {
  socketConfigurations: [{
    key: 'socket1',
    socketURL: 'ws://127.0.0.1:8080',
    keepSocketAlive: true
	}]
});
