import Ember from 'ember';
import socketMixin from 'ember-websockets/mixins/sockets';

export default Ember.Route.extend(socketMixin, {
  socketConfigurations: [{
    key: 'socket1',
    socketURL: 'ws://janrenz.de:82/',
    keepSocketAlive: true
	}],
});
