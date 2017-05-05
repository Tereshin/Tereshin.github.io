blocks.gifts = {

  options: {
    contain: true,
    cellAlign: 'left',
    friction: 0.2,
    prevNextButtons: false,
    selectedAttraction: 0.01,
    imagesLoaded: true,
    pageDots: false
  },

  init: function() {
    $('.gifts-slider__nav .gifts-slider__nav-prev').on( 'click', function() {
      event.preventDefault();
      $('.gifts-slider').flickity('previous');
    });
    $('.gifts-slider__nav .gifts-slider__nav-next').on( 'click', function() {
      event.preventDefault();
      $('.gifts-slider').flickity('next');
    }); 
  }

}