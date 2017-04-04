$(document).ready(function() {

var windowWidth, windowHeight;
function windowSize() {
	windowWidth = $(window).width();
	windowHeight = $(window).height();
}
$(window).load(windowSize()); // при загрузке
$(window).resize(windowSize()); // при изменении размеров

/**************************************************
	Burger Open
***************************************************/
	$('.top-note__burger-link').click(function(){
		$('.top-note__burger-link').toggleClass('open');
		$(this).find('.burger-icon').toggleClass('open');
		$('.main-head-wrap').toggleClass('open');
	});

	$('.main-head-wrap').click(function(event) {
		/* Act on the event */
		$('.top-note__burger-link').removeClass('open');
		$('.top-note__burger-link .burger-icon').removeClass('open');
		$('.main-head-wrap').removeClass('open');
	}).children().click(function(e){
			e.stopPropagation();
	});
/**************************************************
	End Burger Open
***************************************************/


/**************************************************
	Masked Input
***************************************************/
	$("input.input-text--phone").mask("+7 (999) 999-99-99", {autoclear: false});
	$("input.input-text--ticket").mask("9 999999 999999", {autoclear: false, placeholder:"X XXXXXX XXXXXX"});
	$("input.input-prognoz").mask("9", {autoclear: false, placeholder:""});
	$("input.input-prognoz--mini").mask("99", {autoclear: false, placeholder:""});
/**************************************************
	End Masked Input
***************************************************/


/**************************************************
	Prognoz Open
***************************************************/
	if ($('.prognoz-main__item-team-score .more-score-info').length) {
		var moreLink = $('.prognoz-main__item-team-score .more-score-info');
		var moreInfo = moreLink.parents('.prognoz-main__item-about').siblings('.prognoz-main__item-result-wrap');
		moreInfo.slideUp();

		moreLink.on('click', function(event) {
			event.preventDefault();
			if (!($(this).hasClass('active'))) {
				$(this).addClass('active');
				$(this).text('Скрыть');
			} else {
				$(this).removeClass('active');
				$(this).text('Подробнее');
			}
			var moreInfo = $(this).parents('.prognoz-main__item-about').siblings('.prognoz-main__item-result-wrap');
			moreInfo.slideToggle();
		});
	}
	
/**************************************************
	End Prognoz Open
***************************************************/


/**************************************************
	Prognoz Player Choose
***************************************************/
	if ($('#team-list-to-game').length) {
		var activePlayers = 7;

		$('#team-list-to-game .prognoz-main__item-player').on('click', function(event) {
			event.preventDefault();
			
			// Choose Active players
			if (activePlayers >= 0) {
				if ($(this).hasClass('active')) {
					$(this).removeClass('active');
					$(this).find('input').attr('value', '');
					activePlayers++;
				} else {
					$(this).addClass('active');
					$(this).find('input').attr('value', 'true');
					activePlayers--;
				}
			} // if (activePlayers > 0)

			if (activePlayers == 0) {
				$(this).siblings('.prognoz-main__item-player:not(.active)').addClass('deactive');
				$('#team-list-to-game .prognoz-main__item-done').addClass('active');
			} else {
				$(this).siblings('.prognoz-main__item-player:not(.active)').removeClass('deactive');
				$('#team-list-to-game .prognoz-main__item-done').removeClass('active');
			}
			
			console.log(activePlayers);
		});
	}

	if ($('#team-list-to-best').length) {
		var activePlayers = 7;

		$('#team-list-to-best .prognoz-main__item-player').on('click', function(event) {
			event.preventDefault();
			
			// Choose Best player
			if ($(this).hasClass('active')) {
				$(this).removeClass('active');
				$(this).find('input').attr('value', '');

				$(this).siblings('.prognoz-main__item-player:not(.active)').removeClass('deactive');
				$('#team-list-to-best .prognoz-main__item-done').removeClass('active');
			} else {
				$(this).addClass('active');
				$(this).find('input').attr('value', 'true');

				$(this).siblings('.prognoz-main__item-player:not(.active)').addClass('deactive');
				$('#team-list-to-best .prognoz-main__item-done').addClass('active');
			}
			
			
			//activePlayers--;
			console.log(activePlayers);
		});
	}
/**************************************************
	End Prognoz Player Choose
***************************************************/


/**************************************************
	Hinting
***************************************************/
	var inOneMinutes = new Date(new Date().getTime() + 1 * 10 * 1000);
	$(window).load(function(){

		if(windowWidth > 960 && (!(Cookies.get('hint-giraffe')))) {
			setTimeout(function(){
				$('.hinting-sec').addClass('active');
			}, 500);
			$('.hinting-sec').on('click', function(event) {
				event.preventDefault();
				$(this).removeClass('active');
			});
			Cookies.set('hint-giraffe', 'true', inOneMinutes);
		}

	});
	
	
/**************************************************
	End Hinting
***************************************************/


/**************************************************
	Flickity
***************************************************/
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
/**************************************************
	End Flickity
***************************************************/


/**************************************************
	Ag Modal
***************************************************/
	$('#ag-register, #ag-enter').agmodal({
			effect: 'fade', //slide,scale,3d,morph,
			overlayColor: 'rgba(44, 55, 73, 0.9)'
	});
/**************************************************
	End Ag Modal
***************************************************/


/**************************************************
	FancyBox
***************************************************/
	$('.fancybox-media').fancybox({
		openEffect  : 'none',
		closeEffect : 'none',
		padding: 0,

		helpers : {
			media : {}
		}
	});
/**************************************************
	End FancyBox
***************************************************/


});