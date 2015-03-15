import Ember from "ember";

export default Ember.Component.extend({
  renderQrCode: function() {
    var link = this.$('.qrcode').closest('a').attr('href');
    if (link === '#') { link = window.location.pathname }
    var img = window.qr.image(window.location.origin + link);
    this.$('.qrcode').replaceWith(img);

   }.on('didInsertElement')
});
