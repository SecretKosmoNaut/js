sliderInt = 1;
sliderNext = 2;
count = $("#slider img").length;

$(document).ready(function() {

	$("#slider img#" + sliderInt).fadeIn(300);

	startSlider();
});

function startSlider() {

	loop = setInterval(function() {

		if(sliderNext > count) {
			sliderNext = 1;
		};

		$("#slider img").fadeOut(300);
		$("#slider img#" + sliderNext).fadeIn(300);
		sliderInt = sliderNext;
		sliderNext = sliderNext + 1;

	}, 3000);

};

function stopSlider() {

	window.clearInterval(loop);

};

$("#slider img").hover(function() {stopSlider();}, function(){startSlider();});

function prev() {

	newSlide = sliderInt - 1;
	showSlide(newSlide);

};

function next() {

	newSlide = sliderInt + 1;
	showSlide(newSlide);

};

function showSlide(id) {

	stopSlider();
	
	if(id > count) {

			id = 1;

	}else if(id < 1) {

		id = count;

	};

		$("#slider img").fadeOut(300);
		$("#slider img#" + id).fadeIn(300);
		sliderInt = id;
		sliderNext = id + 1;

	startSlider();
};