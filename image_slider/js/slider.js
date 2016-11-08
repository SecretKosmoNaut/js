slideInt = 1;
slideNext = 2;
var count = $("#slider img").length;

$(document).ready(function() {
	$("#slider img#" + slideInt).fadeIn(300);
	startSlider();	
});

function startSlider() {
	loop = setInterval(function() {
		if(slideNext > count) {
			slideNext = 1;		
		};
		$("#slider img").fadeOut(300);
		$("#slider img#" + slideNext).fadeIn(300);
		slideInt = slideNext;
		slideNext++;
	}, 3000);
};

function stopSlider() {
	window.clearInterval(loop);
};

$("img").hover(function() {
	stopSlider();
}, function() {
	startSlider();
});

function showSlide(slide) {
	stopSlider();
	if(slide > count) {
		slide = 1;
	} else if(slide < 1) {
		slide = count;
	};
	$("#slider img").fadeOut(300);
	$("#slider img#" + slide).fadeIn(300);
	slideInt = slide;
	slideNext = slide + 1;
	startSlider();
};

function prev() {
	newSlide = slideInt - 1;
	showSlide(newSlide);
};

function next() {
	newSlide = slideInt + 1;
	showSlide(newSlide);
};