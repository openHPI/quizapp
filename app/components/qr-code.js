import Ember from "ember";

export default Ember.Component.extend({
  renderQrCode: function() {
    var link = this.$('.qrcode').closest('a').attr('href');
    var img = window.qr.image('http://127.0.0.1/' + link);
    this.$('.qrcode').replaceWith(img);

   }.on('didInsertElement')
});
