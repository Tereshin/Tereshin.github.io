blocks.auth = {

  submitBtn: '[data-form="submit"]',
  authForm: '[data-form="form"]',

  init: function() {
    var _this = this;
    _this.submitHandler();
  },

  submitHandler: function() {
    // var _this = this;
    // $(_this.authForm).on('submit', function(e) {
    //   _this.loginPost();
    // });
  },

  loginPost: function() {
    // var _this = this;
    // $.ajax({
    //   url: 'http://127.0.0.1:8887/login',
    //   type: 'POST',
    //   data: $(_this.authForm).serialize(),
    //   success: function(response) {
    //     console.log(response);
    //   },
    //   error: function(response) {
    //     console.log(response);
    //   }
    // });
  }

}