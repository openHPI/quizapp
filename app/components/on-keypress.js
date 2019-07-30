import Component from '@ember/component';
import { on } from '@ember/object/evented';
import { EKMixin, EKOnInsertMixin, keyUp, getCode } from 'ember-keyboard';

export default Component.extend(EKMixin, EKOnInsertMixin, {
  key: null,
  handler: null,
  keyHandlers: null,

  handleKeyPress: on(keyUp(), function(event) {
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
