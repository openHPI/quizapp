import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['playerBox'],

  game: Ember.inject.service()
});
