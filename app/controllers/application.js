import Ember from "ember";

export default Ember.Controller.extend({
  game: Ember.inject.service(),

  joinedPlayers: Ember.computed.alias('game.joinedPlayers'),

  setOrCreateUser(self, user, username) {
    if (user === undefined) {
      user = self.store.createRecord('user', {
        name: username
      });
      user.save();
    }
    return user;
  },
  updateParticipantPoints(self, participant, points) {
    this.store.findQuery('user', { name: participant }).then( function(user) {
      user = self.setOrCreateUser(self, user.objectAt(0), participant);
      user.set('points', points);
      user.set('answered', false);
      user.save();
    });
  }
});
