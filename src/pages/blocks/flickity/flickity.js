blocks.flickity = {

  init: function() {
    $('.gifts-slider').flickity({
      //autoPlay: 5000,
      contain: true,
      cellAlign: 'left',
      friction: 0.2,
      //draggable: false,
      prevNextButtons: false,
      selectedAttraction: 0.01,
      imagesLoaded: true,
      pageDots: false
    });
    $('.gifts-slider__nav .gifts-slider__nav-prev').on( 'click', function() {
      event.preventDefault();
      $('.gifts-slider').flickity('previous');
    });
    $('.gifts-slider__nav .gifts-slider__nav-next').on( 'click', function() {
      event.preventDefault();
      $('.gifts-slider').flickity('next');
    });

    $('.profile__info-tabs').flickity({
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
    });
    $('.profile__info-tabs-nav').flickity({
      asNavFor: '.profile__info-tabs',
      contain: true,
      pageDots: false,
      cellAlign: 'left',
      prevNextButtons: false
    });
    $('.profile__info-tabs-nav a').on('click', function(event) {
      event.preventDefault();
      /* Act on the event */
    });

    $('.zen-progress__tabs-list').flickity({
      contain: true,
      cellAlign: 'left',
      friction: 0.2,
      draggable: false,
      adaptiveHeight: true,
      initialIndex: 0,
      prevNextButtons: false,
      selectedAttraction: 0.01,
      imagesLoaded: true,
      pageDots: false
    });
    $('.zen-progress__tabs-nav').flickity({
      asNavFor: '.zen-progress__tabs-list',
      contain: true,
      pageDots: false,
      cellAlign: 'left',
      prevNextButtons: false
    });
    $('.zp-nav__item a').on('click', function(event) {
      event.preventDefault();
      /* Act on the event */
    });

    $('.prognoz-main__item-team-wrap').flickity({
      contain: true,
      cellAlign: 'center',
      cellSelector: '.prognoz-main__item-team',
      initialIndex: 0,
      selectedAttraction: 0.01,
      friction: 0.2,
      arrowShape: 'M40 100L18.4 50 40 0H21.7L0 50l21.7 50H40z',
      prevNextButtons: false,
      imagesLoaded: true,
      draggable: false,
      adaptiveHeight: true,
      pageDots: false
    });
    $('.prognoz-main__item-team-nav .btn--prev').on( 'click', function() {
      event.preventDefault();
      $('.prognoz-main__item-team-wrap').flickity('previous');
    });
    $('.prognoz-main__item-team-nav .btn--next').on( 'click', function() {
      event.preventDefault();
      $('.prognoz-main__item-team-wrap').flickity('next');
    });
  }

}
