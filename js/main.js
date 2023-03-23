$(document).ready(function () {
    "use strict";

	$('input[type="tel"]').inputmask("+7(999)999-99-99");

	$(".header_block_btns_call").click(function() {
		$(".back_modal").addClass("active");
		$(".modal_demonstration").addClass("active");
		$("body").addClass("scroll");
	});

	$(".header_block_burger").click(function() {
		$(".back_modal").addClass("active");
		$("body").addClass("scroll");
		$(".modal_mob").addClass("active");
	});

	$(".footer_block_top_burger").click(function() {
		$(".footer_mob").addClass("active");
	});

	$(".back_modal").click(function() {
		$("body").removeClass("scroll");
		$(this).removeClass("active");
		$(".modal_callback").removeClass("active");
		$(".modal_demonstration").removeClass("active");
		$(".modal_thank").removeClass("active");
		$(".modal_mob").removeClass("active");
	});

	$(".modal_callback_close").click(function() {
		$("body").removeClass("scroll");
		$(".back_modal").removeClass("active");
		$(".modal_callback").removeClass("active");
	});

	$(".modal_demonstration_close").click(function() {
		$("body").removeClass("scroll");
		$(".back_modal").removeClass("active");
		$(".modal_demonstration").removeClass("active");
	});

	$(".modal_mob_close").click(function() {
		$("body").removeClass("scroll");
		$(".back_modal").removeClass("active");
		$(".modal_mob").removeClass("active");
	});

	$(".modal_thank_close").click(function() {
		$("body").removeClass("scroll");
		$(".back_modal").removeClass("active");
		$(".modal_thank").removeClass("active");
	});

	$(".modal_demonstration_form label input").change(function() {
		if($(this).is(':checked')) {
			$(".modal_demonstration_form input[type='submit']").removeClass("no_active");	
		} else {
			$(".modal_demonstration_form input[type='submit']").addClass("no_active");	
		}
	});

	$(".modal_callback_form label input").change(function() {
		if($(this).is(':checked')) {
			$(".modal_callback_form input[type='submit']").removeClass("no_active");	
		} else {
			$(".modal_callback_form input[type='submit']").addClass("no_active");	
		}
	});

	$(".menu_about").click(function() {
		$(".back_modal").removeClass("active");
		$(".modal_mob").removeClass("active");
		$("body").removeClass("scroll");
		$([document.documentElement, document.body]).animate({
			scrollTop: $(".about").offset().top
		}, 1500);
	});

	$(".menu_advantage").click(function() {
		$(".back_modal").removeClass("active");
		$(".modal_mob").removeClass("active");
		$("body").removeClass("scroll");
		$([document.documentElement, document.body]).animate({
			scrollTop: $(".advantages").offset().top
		}, 1500);
	});

	$(".menu_rates").click(function() {
		$(".back_modal").removeClass("active");
		$(".modal_mob").removeClass("active");
		$("body").removeClass("scroll");
		$([document.documentElement, document.body]).animate({
			scrollTop: $(".rates").offset().top - 80
		}, 1500);
	});

	$(".menu_possibilities").click(function() {
		$(".back_modal").removeClass("active");
		$(".modal_mob").removeClass("active");
		$("body").removeClass("scroll");
		$([document.documentElement, document.body]).animate({
			scrollTop: $(".possibilities").offset().top
		}, 1500);
	});

	$(".rates_block_main_slider_item_right button").click(function() {
		$(".back_modal").addClass("active");
		$(".modal_callback").addClass("active");
		$("body").addClass("scroll");
	});

	$(".widget").click(function() {
		$(".back_modal").addClass("active");
		$(".modal_callback").addClass("active");
		$("body").addClass("scroll");
	});

	$(".header_btns_callback").click(function() {
		$(".back_modal").addClass("active");
		$(".modal_demonstration").addClass("active");
		$("body").addClass("scroll");
	});

	$(".footer_block_top_btns_call").click(function() {
		$(".back_modal").addClass("active");
		$(".modal_demonstration").addClass("active");
		$("body").addClass("scroll");
	});

	$(".footer_block_btns_call").click(function() {
		$(".back_modal").addClass("active");
		$(".modal_demonstration").addClass("active");
		$("body").addClass("scroll");
	});

	$(".footer_block_mid_right").click(function() {
		$(".back_modal").addClass("active");
		$(".modal_callback").addClass("active");
		$("body").addClass("scroll");
	});
	
    
    $('.rates_block_main_slider').slick({
		dots: true,
		arrows: true,
		infinite: true,
        fade: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
        prevArrow: $('.rates_block_main_prev'),
        nextArrow: $('.rates_block_main_next')
    });

    $('.possibilities_main_slider').slick({
		dots: true,
		arrows: true,
		infinite: true,
        fade: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
        prevArrow: $('.possibilities_main_prev'),
        nextArrow: $('.possibilities_main_next')
    });

});