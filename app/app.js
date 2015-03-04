import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver,
  LOG_TRANSITIONS: false,
  LOG_VIEW_LOOKUPS: false,
  LOG_RESOLVER: false,
// Extremely detailed logging, highlighting every internal
// step made while transitioning into a route, including
// `beforeModel`, `model`, and `afterModel` hooks, and
// information about redirects and aborted transitions
  LOG_TRANSITIONS_INTERNAL: false
});
loadInitializers(App, config.modulePrefix);

export default App;
