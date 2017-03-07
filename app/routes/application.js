import Ember from 'ember';

export default Ember.Route.extend({

  websockets: Ember.inject.service(),
  socket: null,

  beforeModel() {
    this._super(...arguments);

    const socket = this.get('websockets').socketFor(
      this.getSocketHost()
    );
    this.set('socket', socket);
  },

  getSocketHost() {
    let baseUrl = 'ws://janrenz.de';
    let port = 0;
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
    return `${baseUrl}:${port}`;
  }

});
