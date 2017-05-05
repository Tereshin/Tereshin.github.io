blocks.profileInfoContent = {

  options: {
    contain: true,
    cellAlign: 'left',
    selectedAttraction: 0.1,
    friction: 0.6,
    adaptiveHeight: true,
    draggable: false,
    initialIndex: 0,
    prevNextButtons: false,
    imagesLoaded: true,
    pageDots: false
  },

  init: function() {

  }

}

blocks.profileInfoTabs = {

  options: {
    asNavFor: '.profile-info__content',
    contain: true,
    pageDots: false,
    cellAlign: 'left',
    prevNextButtons: false
  },

  init: function() {
    $('.profile-info__tabs a').on('click', function(event) {
      event.preventDefault();
    });

  }

}