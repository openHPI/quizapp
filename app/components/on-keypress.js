import Ember from 'ember';
import { EKMixin, EKOnInsertMixin, keyUp, getCode } from 'ember-keyboard';

export default Ember.Component.extend(EKMixin, EKOnInsertMixin, {
  key: null,
  handler: null,
  keyHandlers: null,

  handleKeyPress: Ember.on(keyUp(), function(event) {
    const keyCode = getCode(event);

    // We only have a single key handler
    if (this.get('key') && this.get('handler')) {
      if (this.get('key') === keyCode) {
        this.get('handler')();
        return;
      }
    }

    // We have a hash of possible handlers
    if (this.get('keyHandlers')) {
      if (this.get('keyHandlers')[keyCode]) {
        this.get('keyHandlers')[keyCode]();
      }
    }
  })
});
