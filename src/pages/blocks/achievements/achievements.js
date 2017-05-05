blocks.achievements = {

  options: {
    asNavFor: '.zen-progress__tabs-list',
    contain: true,
    pageDots: false,
    cellAlign: 'left',
    prevNextButtons: false
  },
  
  init: function() {

    var _this = this;

    $('[data-tabs="achievements"]').flickity(_this.options);

  }

}