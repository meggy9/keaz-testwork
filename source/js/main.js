$(document).ready(function(){

	$("#owl-photo").owlCarousel({
		items: 1
	});

	$("#owl-image").owlCarousel({
		items: 1
	});

	$("#owl-main-slider").owlCarousel({
		items: 1
	})


	$(".trigger").click(function(){
		
		$(this).toggleClass("active");

		$('#owl-photo').toggleClass("active");
		$('#owl-image').toggleClass("active");
		$('.images').toggleClass("active");
		$('.right__block').toggleClass("about");
		$('.about__block').toggleClass("active");
	})
})