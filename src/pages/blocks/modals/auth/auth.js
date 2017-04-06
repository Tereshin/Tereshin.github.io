blocks.auth = {

  submitBtn: '[data-form="submit"]',
  authForm: '[data-form="form"]',

  init: function() {
    var _this = this;
    _this.submitHandler();
  },

  submitHandler: function() {
    var _this = this;
    $(_this.authForm).on('submit', function(e) {
      console.log(e);
    });
  },

  ajaxPost: function() {
    var _this = this;

  }

}