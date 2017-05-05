$(document).ready(function() {

	$('.notifications__burger-link').click(function(){
		$('.notifications__burger-link').toggleClass('open');
		$(this).find('.burger-icon').toggleClass('open');
		$('.main-head-wrap').toggleClass('open');
	});

	$('.main-head-wrap').click(function(event) {
		/* Act on the event */
		$('.notifications__burger-link').removeClass('open');
		$('.notifications__burger-link .burger-icon').removeClass('open');
		$('.main-head-wrap').removeClass('open');
	}).children().click(function(e){
			e.stopPropagation();
	});




	$("input.input-text--phone").mask("+7 (999) 999-99-99", {autoclear: false});
	$("input.input-text--ticket").mask("9 999999 999999", {autoclear: false, placeholder:"X XXXXXX XXXXXX"});
	$("input.input-prognoz").mask("9", {autoclear: false, placeholder:""});
	$("input.input-prognoz--mini").mask("99", {autoclear: false, placeholder:""});



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

});



var windowWidth, 
		windowHeight,
		inOneMinutes = new Date(new Date().getTime() + 1 * 10 * 1000);


function windowSize() {
	windowWidth = $(window).width();
	windowHeight = $(window).height();
};

function loadWindowFunction() {

	windowSize();

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
};

// $(window).load(function(){
// 	loadWindowFunction();
// });

// $(window).resize(windowSize());