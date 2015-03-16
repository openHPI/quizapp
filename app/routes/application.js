import Ember from 'ember';
import socketMixin from 'ember-websockets/mixins/sockets';

export default Ember.Route.extend(socketMixin, {
  socketConfigurations: [{
    key: 'socket1',
    socketURL: 'ws://localhost:15000',
    keepSocketAlive: true
  }],
  beforeModel: function() {
    var socket_url = 'ws://janrenz.de:';
    var port = 0;
    switch (window.location.hostname) {
	    case 'openhpi-quizapp2.herokuapp.com':
				port = 82;
				break;
			case 'openhpi-quizapp3.herokuapp.com':
				port = 83;
				break;
			case 'openhpi-quizapp4.herokuapp.com':
				port = 84;
				break;
			default:
				port = 85;
		}
		this.socketConfigurations[0].socketURL = socket_url + port;
  }
});
