jQuery(document).ready(function($){

	var MqL = 1200; // 992

	$('.main-header .children > a').on('click', function(event){
		event.preventDefault();
		var selected = $(this);
		
		if (selected.next('ul.secondary-nav').hasClass('is-hidden')) {
			$('.main-header .children > a').each(function() {
				$(this).parent().removeClass('selected');
				$(this).next('ul.secondary-nav').addClass('is-hidden');
			});
			selected.parent().addClass('selected');
			selected.addClass('selected').next('ul.secondary-nav').removeClass('is-hidden');
			$('.cd-overlay').addClass('is-visible');
			$('header').addClass("submenu-open");

			// Hide search bar
			$('.cd-search').removeClass('is-visible');
			$('.cd-search-trigger').removeClass('search-is-visible');
		} else {
			selected.parent().removeClass('selected');
			selected.removeClass('selected').next('ul.secondary-nav').addClass('is-hidden');
			$('.cd-overlay').removeClass('is-visible');
			$('header').removeClass("submenu-open");
		}

	});

	$('.cd-overlay').on('click', function(){
		var selected = $('.main-header .children > a');

		selected.parent().removeClass('selected');
		selected.removeClass('selected').next('ul.secondary-nav').addClass('is-hidden');
		$('.cd-overlay').removeClass('is-visible');
		$('header').removeClass("submenu-open");
	});

	$('.cd-search-trigger').on('click', function(event){
		var selected = $('.main-header .children > a');
		
		selected.parent().removeClass('selected');
		selected.removeClass('selected').next('ul.secondary-nav').addClass('is-hidden');
		$('header').removeClass("submenu-open"); 
	});

});
